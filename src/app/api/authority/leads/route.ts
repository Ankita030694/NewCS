import { NextRequest, NextResponse } from 'next/server';
import { FieldPath } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebaseAdmin';
import type { LeadRecord } from '@/app/authority/leads/types';
import { DEFAULT_PAGE_SIZE } from '@/app/authority/leads/types';

type CursorPayload = {
  created: number;
  id: string;
};

const leadsRef = adminDb.collection('Form');
const MAX_LIMIT = 100;
const MAX_ITERATIONS = 5;

const normalizeString = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : '';

const normalizeNumber = (value: unknown): number => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === 'string') {
    const parsed = Number.parseInt(value, 10);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return 0;
};

const mapDocToLead = (
  doc: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>
): LeadRecord => {
  const data = doc.data() ?? {};

  return {
    id: doc.id,
    canPay: normalizeString(data.canPay),
    city: normalizeString(data.city),
    created: normalizeNumber(data.created),
    creditCardDues: normalizeString(data.creditCardDues),
    date: normalizeString(data.date),
    email: normalizeString(data.email),
    employmentStatus: normalizeString(data.employmentStatus),
    harassment: normalizeString(data.harassment),
    monthlyIncome: normalizeString(data.monthlyIncome),
    name: normalizeString(data.name),
    number: normalizeString(data.number),
    personalLoanDues: normalizeString(data.personalLoanDues),
    queries: normalizeString(data.queries)
  };
};

const encodeCursor = (payload: CursorPayload): string =>
  Buffer.from(JSON.stringify(payload)).toString('base64');

const decodeCursor = (raw?: string | null): CursorPayload | null => {
  if (!raw) {
    return null;
  }
  try {
    const json = Buffer.from(raw, 'base64').toString('utf-8');
    const parsed = JSON.parse(json) as CursorPayload;
    if (typeof parsed.created === 'number' && typeof parsed.id === 'string') {
      return parsed;
    }
    return null;
  } catch (error) {
    console.warn('Invalid cursor received:', error);
    return null;
  }
};

const matchesSearch = (lead: LeadRecord, term: string): boolean => {
  const value = term.trim().toLowerCase();
  if (!value) {
    return true;
  }
  return (
    lead.name.toLowerCase().includes(value) ||
    lead.email.toLowerCase().includes(value) ||
    lead.number.toLowerCase().includes(value) ||
    lead.city.toLowerCase().includes(value)
  );
};

const applyFilters = (
  baseQuery: FirebaseFirestore.Query<FirebaseFirestore.DocumentData>,
  filters: {
    city?: string;
    canPay?: string;
    harassment?: string;
    employment?: string;
  },
  range?: {
    from?: number;
    to?: number;
  }
) => {
  let query = baseQuery;
  if (filters.city) {
    query = query.where('city', '==', filters.city);
  }
  if (filters.canPay) {
    query = query.where('canPay', '==', filters.canPay);
  }
  if (filters.harassment) {
    query = query.where('harassment', '==', filters.harassment);
  }
  if (filters.employment) {
    query = query.where('employmentStatus', '==', filters.employment);
  }
  if (typeof range?.from === 'number') {
    query = query.where('created', '>=', range.from);
  }
  if (typeof range?.to === 'number') {
    query = query.where('created', '<=', range.to);
  }
  return query;
};

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const limitParam = Number.parseInt(searchParams.get('limit') ?? '', 10);
    const limit =
      Number.isFinite(limitParam) && limitParam > 0
        ? Math.min(limitParam, MAX_LIMIT)
        : DEFAULT_PAGE_SIZE;

    const filters = {
      city: normalizeString(searchParams.get('city')),
      canPay: normalizeString(searchParams.get('canPay')),
      harassment: normalizeString(searchParams.get('harassment')),
      employment: normalizeString(searchParams.get('employment'))
    };

    const fromParam = Number.parseInt(searchParams.get('from') ?? '', 10);
    const toParam = Number.parseInt(searchParams.get('to') ?? '', 10);

    const rangeFilters = (() => {
      const from = Number.isFinite(fromParam) ? fromParam : undefined;
      const to = Number.isFinite(toParam) ? toParam : undefined;
      if (typeof from === 'number' && typeof to === 'number' && from > to) {
        return { from: to, to: from };
      }
      return { from, to };
    })();

    const appliedFilters = {
      city: filters.city || undefined,
      canPay: filters.canPay || undefined,
      harassment: filters.harassment || undefined,
      employment: filters.employment || undefined
    };

    const searchTermRaw = searchParams.get('search') ?? '';
    const searchTerm = searchTermRaw.trim();
    const cursor = decodeCursor(searchParams.get('cursor'));

    const baseQuery = applyFilters(leadsRef, appliedFilters, rangeFilters);

    let totalCount = 0;
    try {
      const aggregateSnapshot = await baseQuery.count().get();
      totalCount = aggregateSnapshot.data().count ?? 0;
    } catch (aggregateError) {
      console.warn('Failed to compute aggregate count for leads:', aggregateError);
    }

    let orderedQuery = baseQuery.orderBy('created', 'desc').orderBy(FieldPath.documentId());

    if (cursor) {
      orderedQuery = orderedQuery.startAfter(cursor.created, cursor.id);
    }

    let results: LeadRecord[] = [];
    let hasMore = false;
    let iterations = 0;
    let lastCursor: CursorPayload | null = cursor;
    let nextQuery = orderedQuery;

    while (results.length < limit && iterations < MAX_ITERATIONS) {
      const snapshot = await nextQuery.limit(limit).get();

      if (snapshot.empty) {
        hasMore = false;
        break;
      }

      const docs = snapshot.docs;
      const leadsBatch = docs.map(mapDocToLead);
      const filteredBatch = searchTerm
        ? leadsBatch.filter((lead) => matchesSearch(lead, searchTerm))
        : leadsBatch;

      for (const lead of filteredBatch) {
        if (results.length < limit) {
          results.push(lead);
        }
      }

      const lastDoc = docs[docs.length - 1];
      lastCursor = {
        created: normalizeNumber(lastDoc.get('created')),
        id: lastDoc.id
      };

      hasMore = docs.length === limit;

      if (!searchTerm || !hasMore || results.length >= limit) {
        break;
      }

      iterations += 1;
      nextQuery = baseQuery
        .orderBy('created', 'desc')
        .orderBy(FieldPath.documentId())
        .startAfter(lastCursor.created, lastCursor.id);
    }

    const responsePayload = {
      data: results,
      pageInfo: {
        count: results.length,
        totalCount,
        hasNext: hasMore && lastCursor !== null,
        nextCursor: hasMore && lastCursor ? encodeCursor(lastCursor) : null
      }
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const payload = await request.json().catch(() => null);
    const leadId = typeof payload?.id === 'string' ? payload.id.trim() : '';

    if (!leadId) {
      return NextResponse.json({ error: 'Lead id is required' }, { status: 400 });
    }

    const docRef = leadsRef.doc(leadId);
    const snapshot = await docRef.get();

    if (!snapshot.exists) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    await docRef.delete();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to delete lead' },
      { status: 500 }
    );
  }
}


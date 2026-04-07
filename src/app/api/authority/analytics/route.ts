import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';

const leadsRef = adminDb.collection('Form');

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

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const fromParam = Number.parseInt(searchParams.get('from') ?? '', 10);
    const toParam = Number.parseInt(searchParams.get('to') ?? '', 10);

    let query = leadsRef.orderBy('created', 'desc');

    if (Number.isFinite(fromParam)) {
      query = query.where('created', '>=', fromParam);
    }
    if (Number.isFinite(toParam)) {
      query = query.where('created', '<=', toParam);
    }

    const snapshot = await query.get();
    
    if (snapshot.empty) {
      return NextResponse.json({
        totalLeads: 0,
        bySource: [],
        byUrl: [],
        byCampaign: []
      }, { status: 200 });
    }

    const sourceMap: Record<string, number> = {};
    const urlMap: Record<string, number> = {};
    const campaignMap: Record<string, number> = {};
    const dailyLeads: Record<string, number> = {};

    snapshot.docs.forEach(doc => {
      const data = doc.data();
      const submissionUrl = normalizeString(data.submissionUrl);
      const created = normalizeNumber(data.created);
      
      // Daily leads
      if (created > 0) {
        const date = new Date(created).toISOString().split('T')[0];
        dailyLeads[date] = (dailyLeads[date] || 0) + 1;
      }

      if (!submissionUrl) {
        urlMap['no-url'] = (urlMap['no-url'] || 0) + 1;
        sourceMap['none'] = (sourceMap['none'] || 0) + 1;
      } else {
        try {
          const url = new URL(submissionUrl);
          const baseUrl = `${url.origin}${url.pathname}`;
          const params = url.searchParams;
          
          const source = params.get('utm_source') || 'direct';
          const campaign = params.get('utm_campaign') || 'none';

          urlMap[baseUrl] = (urlMap[baseUrl] || 0) + 1;
          sourceMap[source] = (sourceMap[source] || 0) + 1;
          campaignMap[campaign] = (campaignMap[campaign] || 0) + 1;
        } catch (e) {
          // fallback if URL is invalid but not empty
          urlMap[submissionUrl] = (urlMap[submissionUrl] || 0) + 1;
          sourceMap['unknown'] = (sourceMap['unknown'] || 0) + 1;
        }
      }
    });

    const formatMap = (map: Record<string, number>) => 
      Object.entries(map)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);

    const responsePayload = {
      totalLeads: snapshot.size,
      bySource: formatMap(sourceMap),
      byUrl: formatMap(urlMap),
      byCampaign: formatMap(campaignMap),
      dailyLeads: Object.entries(dailyLeads)
        .map(([date, count]) => ({ date, count }))
        .sort((a, b) => a.date.localeCompare(b.date))
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

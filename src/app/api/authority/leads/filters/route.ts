import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';

const leadsRef = adminDb.collection('Form');

const normalizeOption = (value: unknown): string => {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : '';
  }
  return '';
};

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const snapshot = await leadsRef
      .select('city', 'canPay', 'harassment', 'employmentStatus')
      .get();

    const citySet = new Set<string>();
    const canPaySet = new Set<string>();
    const harassmentSet = new Set<string>();
    const employmentSet = new Set<string>();

    snapshot.forEach((doc) => {
      const data = doc.data() ?? {};
      const city = normalizeOption(data.city);
      const canPay = normalizeOption(data.canPay);
      const harassment = normalizeOption(data.harassment);
      const employment = normalizeOption(data.employmentStatus);

      if (city) citySet.add(city);
      if (canPay) canPaySet.add(canPay);
      if (harassment) harassmentSet.add(harassment);
      if (employment) employmentSet.add(employment);
    });

    const formatOptions = (values: Set<string>) =>
      Array.from(values).sort((a, b) => a.localeCompare(b));

    return NextResponse.json(
      {
        city: formatOptions(citySet),
        canPay: formatOptions(canPaySet),
        harassment: formatOptions(harassmentSet),
        employment: formatOptions(employmentSet)
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching lead filter options:', error);
    return NextResponse.json(
      { error: 'Failed to load lead filters' },
      { status: 500 }
    );
  }
}


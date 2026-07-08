export interface CreditCardBank {
  name: string;
  slug: string;
  tier: number; // 1: Major National, 2: Large Private/Public, 3: Regional/Specialty
}

export const creditCardBanks: CreditCardBank[] = [
  { name: 'HDFC Bank', slug: 'hdfc', tier: 1 },
  { name: 'SBI Card', slug: 'sbi', tier: 1 },
  { name: 'ICICI Bank', slug: 'icici', tier: 1 },
  { name: 'Axis Bank', slug: 'axis', tier: 1 },
  { name: 'Kotak Mahindra Bank', slug: 'kotak', tier: 1 },
  { name: 'Yes Bank', slug: 'yes-bank', tier: 2 },
  { name: 'IndusInd Bank', slug: 'indusind', tier: 2 },
  { name: 'IDFC First Bank', slug: 'idfc-first', tier: 2 },
  { name: 'RBL Bank', slug: 'rbl', tier: 2 },
  { name: 'Bank of Baroda', slug: 'bob', tier: 2 },
  { name: 'Punjab National Bank', slug: 'pnb', tier: 2 },
  { name: 'Standard Chartered', slug: 'standard-chartered', tier: 3 },
  { name: 'HSBC', slug: 'hsbc', tier: 3 },
  { name: 'American Express', slug: 'amex', tier: 3 },
  { name: 'Citi Bank', slug: 'citi', tier: 3 }
];

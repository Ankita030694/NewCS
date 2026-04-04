export type LeadRecord = {
  id: string;
  canPay: string;
  city: string;
  created: number;
  creditCardDues: string;
  date: string;
  email: string;
  employmentStatus: string;
  harassment: string;
  monthlyIncome: string;
  name: string;
  number: string;
  personalLoanDues: string;
  queries: string;
  submissionUrl?: string;
  utmParams?: Record<string, string>;
};

export const DEFAULT_PAGE_SIZE = 50;




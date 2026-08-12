import { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';


export const metadata: Metadata = {
  alternates: { canonical: 'https://www.credsettle.com/services' },
};
export default function ServicesPage() {
  return <ServicesPageClient />;
}

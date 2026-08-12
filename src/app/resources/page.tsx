import { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';
import { getPaginatedBlogs } from '@/lib/blogs';

export const revalidate = 300;


export const metadata: Metadata = {
  alternates: { canonical: 'https://www.credsettle.com/resources' },
};
export default async function ResourcesPage() {
  const { blogs, pagination } = await getPaginatedBlogs(1, 9);

  return (
    <ResourcesClient
      initialBlogs={blogs}
      initialPagination={pagination}
    />
  );
}



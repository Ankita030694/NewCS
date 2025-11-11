import ResourcesClient from './ResourcesClient';
import { getPaginatedBlogs } from '@/lib/blogs';

export const revalidate = 300;

export default async function ResourcesPage() {
  const { blogs, pagination } = await getPaginatedBlogs(1, 9);

  return (
    <ResourcesClient
      initialBlogs={blogs}
      initialPagination={pagination}
    />
  );
}



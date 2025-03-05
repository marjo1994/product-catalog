import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Products from "../components/Products";
import { getProducts } from '@/services/products';


export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    initialPageParam: 1,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Products></Products>
    </HydrationBoundary>
  );
}

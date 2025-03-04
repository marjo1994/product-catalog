import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Products from "../components/Products";
import { getProducts } from '@/services/products';


export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Products></Products>
    </HydrationBoundary>
  );
}

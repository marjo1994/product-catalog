import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
  } from '@tanstack/react-query';

import Breadcrumb from "../../../components/Breadcrumb";
import { getProductbySku } from "@/services/products";
import ProductDetails from '../../../components/ProductDetails';


export default async function ProductDetailsPage({
    params,
  }: {
    params: Promise<{ productSku: string }>;
  }) {
    const productSku = (await params).productSku;

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['productbysku', productSku],
        queryFn: () => getProductbySku(productSku),
      });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Breadcrumb></Breadcrumb>
                <ProductDetails productSku={productSku}></ProductDetails>
            </main>
        </HydrationBoundary>
    );
  }
  
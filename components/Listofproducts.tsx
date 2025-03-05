'use client'

import { getProducts } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

interface Product {
  sku: string;
  name: string; 
  imageAlt: string;
  imageSrc: string;
  href: string;
  brand: string;
  price: number;
  category: string;
  description: string;
}

export default function ListOfProducts() {
    const { data } = useQuery({
      queryKey: ['products'],
      queryFn: () => getProducts(),
    })

    return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">List of products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.map((product: Product) => (
          <div key={product.sku} className="group relative">
              <Image
              width={280}
              height={380}
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
              <div>
                  <h3 className="text-sm text-gray-700">
                  <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                  </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
 )
}
'use client';

import { getProductbySku } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

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

interface ProductDetailsProps {
    productSku: string; // Accept product prop
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productSku }) => {
    
    const { data, error, isLoading } = useQuery<Product, Error>({
        queryKey: ['product', productSku],
        queryFn: () => getProductbySku(productSku),
        enabled: !!productSku,
    });
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    //console.log(data);
    return(
        <>
        <div className="grid md:grid-cols-4 md:gap-3 py-4 md:py-8">
            <div className="md:col-span-2">
                <Image
                    src={data?.imageSrc}
                    alt={data?.imageAlt}
                    width={640}
                    height={640}
                    sizes="100vw"
                    style={{
                    width: '100%',
                    height: 'auto',
                    }}
                ></Image>
            </div>
            <div className="content-center py-4 md:py-0">
                    <ul>
                        <li>
                            <h1 className="text-3xl font-bold">{data?.name}</h1>
                        </li>
                        <li className="inline"><span className="font-bold">Category:</span> {data?.category}</li>
                        <li><span className="font-bold">Brand:</span> {data?.brand}</li>
                        <li><span className="font-bold">Description:</span> {data?.description}</li>
                    </ul>
                    <div className="card p-5">
                        <div className="mb-2 flex-row justify-center">
                            <div className="text-center text-md">Price</div>
                            <div className="text-center text-3xl">{data?.price}</div>
                        </div>
                    </div>
            </div>
            
        </div>
      
        </>
    );
}

export default ProductDetails;

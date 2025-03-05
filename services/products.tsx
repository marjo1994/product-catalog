
export const getProducts = async ({pageParam} : {pageParam : number}) => {
    const url = `http://localhost:4000/products?_page=${pageParam}&_per_page=8`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
};


export const getProductbySku = async (sku: string) => {
    const url = `http://localhost:4000/products?sku=${sku}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.length > 0 ? data[0] : null;
};
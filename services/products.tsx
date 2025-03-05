export const getProducts = async () => {
    const res = await fetch("http://localhost:4000/products");
    return res.json();
};

export const getProductbySku = async (sku: string) => {
    const url = `http://localhost:4000/products?sku=${sku}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.length > 0 ? data[0] : null;
};
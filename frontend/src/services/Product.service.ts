import { api, apiUpload } from "../httpRequest/api";

export async function postProduct(productUpload: any) {
    return await apiUpload.post("/products", productUpload);
}

export async function getProducts() {
    return await api.get("/products").then((res) => res.data);
}

export async function deleteProduct(id: string) {
    return await api.delete(`/products/${id}`);
}


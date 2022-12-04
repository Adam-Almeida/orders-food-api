import { apiUpload } from "../httpRequest/api";

export async function postProduct(productUpload: any) {
    return await apiUpload.post("/products", productUpload);
}

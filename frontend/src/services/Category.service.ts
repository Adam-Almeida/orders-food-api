import { api } from "../httpRequest/api";
import { Category } from "../types/Category";

export async function getCategories() {
    return await api.get("/categories").then((res) => res.data);
}

export async function postCategory(category: Category) {
    return await api.post("/categories", category);
}

export async function deleteCategory(id: string) {
    return await api.delete(`/categories/${id}`);
}

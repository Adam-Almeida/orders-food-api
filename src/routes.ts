import { Router } from "express";
import createCategory from "./app/useCases/categories/createCategory";
import listCategories from "./app/useCases/categories/listCategories";
import createProducts from "./app/useCases/products/createProducts";
import listProducts from "./app/useCases/products/listProducts";

export const router = Router();

//list categories
router.get("/categories", listCategories.handle);

//create categories
router.post("/categories", createCategory.handle);

//list products
router.get("/products", listProducts.handle);

//create products
router.post("/products", createProducts.handle);

//get product by categorie
router.get("/categories/:id/products", (req, res) => {
    res.send("ok");
});

//list orders
router.get("/orders", (req, res) => {
    res.send("ok");
});

//create orders
router.post("/orders", (req, res) => {
    res.send("ok");
});

//change order status
router.patch("/orders/:id", (req, res) => {
    res.send("ok");
});

//delete order
router.delete("/orders/:id", (req, res) => {
    res.send("ok");
});

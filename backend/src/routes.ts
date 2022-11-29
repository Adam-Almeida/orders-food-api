import { Router } from "express";
import { upload } from "./app/utils/upload";

import createCategory from "./app/useCases/categories/createCategory";
import listCategories from "./app/useCases/categories/listCategories";
import createProducts from "./app/useCases/products/createProducts";
import listProducts from "./app/useCases/products/listProducts";
import listProductsByCategory from "./app/useCases/categories/listProductsByCategory";
import listOrders from "./app/useCases/orders/listOrders";
import createOrders from "./app/useCases/orders/createOrders";
import changeOrderStatus from "./app/useCases/orders/changeOrderStatus";
import deletedOrder from "./app/useCases/orders/deletedOrder";
import deleteCategory from "./app/useCases/categories/deleteCategory";

export const router = Router();

//list categories
router.get("/categories", listCategories.handle);

//create categories
router.post("/categories", createCategory.handle);

//list products
router.get("/products", listProducts.handle);

//create products
router.post("/products", upload.single("image"), createProducts.handle);

//get product by categorie
router.get("/categories/:id/products", listProductsByCategory.handle);

//delete product by categorie
router.delete("/categories/:id", deleteCategory.handle);

//list orders
router.get("/orders", listOrders.handle);

//create orders
router.post("/orders", createOrders.handle);

//change order status
router.patch("/orders/:id", changeOrderStatus.handle);

//delete order
router.delete("/orders/:id", deletedOrder.handle);

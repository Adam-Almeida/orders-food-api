import path from "node:path";
import { Router } from "express";
import multer from "multer";

import createCategory from "./app/useCases/categories/createCategory";
import listCategories from "./app/useCases/categories/listCategories";
import createProducts from "./app/useCases/products/createProducts";
import listProducts from "./app/useCases/products/listProducts";

export const router = Router();

const upload = multer({
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 1024 * 1024
    },
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, "..", "uploads"));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`)
        },
    }),
});

//list categories
router.get("/categories", listCategories.handle);

//create categories
router.post("/categories", createCategory.handle);

//list products
router.get("/products", listProducts.handle);

//create products
router.post("/products", upload.single("image"), createProducts.handle);

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

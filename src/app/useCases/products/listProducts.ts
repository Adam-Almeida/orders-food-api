import { Request, Response } from "express";
import { Product } from "../../models/Product";

class ListProducts {
    async handle(req: Request, res: Response) {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new ListProducts();

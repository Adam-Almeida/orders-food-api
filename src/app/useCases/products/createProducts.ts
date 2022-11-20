import { Request, Response } from "express";
import { Product } from "../../models/Product";

class createProducts {
    async handle(req: Request, res: Response) {
        try {
            const imagePath = req.file?.filename;
            const { name, description, price, category, ingredients } =
                req.body;

            if (!name || !description || !price || !category || !ingredients) {
                res.status(400).json({ error: "Preencha todos os campos." });
                return;
            }

            const product = await Product.create({
                name,
                description,
                price: Number(price),
                imagePath,
                category,
                ingredients: JSON.parse(ingredients),
            });

            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new createProducts();

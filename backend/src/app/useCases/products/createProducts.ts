import { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import mongoose from "mongoose";
import { Product } from "../../models/Product";

class createProducts {
    async handle(req: Request, res: Response) {
        try {
            const imagePath = req.file?.filename;
            const { name, description, price, category, ingredients } =
                req.body;

            if (!name || !price || !category) {
                res.status(400).json({ error: "Preencha todos os campos." });
                const uploadDir = path.resolve(
                    __dirname,
                    "..",
                    "..",
                    "..",
                    "..",
                    "uploads"
                );
                const exists = fs.existsSync(uploadDir);

                if (exists) {
                    fs.unlink(`${uploadDir}/${imagePath}`, (err) => {
                        if (err) {
                            res.status(400).json({
                                error: `Erro ao excluir uploads anterios. ${err?.message}`,
                            });
                        }
                    });
                }
                return;
            }

            const newCategory = new mongoose.Types.ObjectId(category);
            const product = await Product.create({
                name,
                description,
                price: Number(price),
                imagePath,
                category: newCategory,
                ingredients: ingredients ? JSON.parse(ingredients) : [],
            });

            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new createProducts();

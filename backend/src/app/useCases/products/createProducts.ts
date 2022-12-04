import { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import mongoose from "mongoose";
import { Product } from "../../models/Product";

class createProducts {
    async handle(req: Request, res: Response) {
        const imagePath = req.file?.filename;
        const { name, description, price, category, ingredients } = req.body;

        if (!name || !price || !category) {
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
                        res.json({
                            error: `Erro ao excluir uploads anterios. ${err?.message}`,
                        });
                    }
                });
            }
            return res
                .status(400)
                .json({
                    error: "Ops, você foi muito rápido, preencha novamente.",
                });
        }
        try {
            const newCategory = new mongoose.Types.ObjectId(category);
            const product = await Product.create({
                name,
                description,
                price: Number(price),
                imagePath,
                category: newCategory,
                ingredients: ingredients ? JSON.parse(ingredients) : [],
            });

            res.json(product);
        } catch (error) {
            return res
            .status(400)
            .json({
                error: "Ops, tivemos um problema interno.",
            });
        }
    }
}

export default new createProducts();

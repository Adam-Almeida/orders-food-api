import { Request, Response } from "express";
import mongoose from "mongoose";
import { Category } from "../../models/Category";
import { Product } from "../../models/Product";

class deleteCategory {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id || !mongoose.isValidObjectId(id)) {
                res.status(400).json({
                    error: "Digite um id válido para a categoria.",
                });
                return;
            }

            const products = await Product.find().where("category").equals(id);

            if (products.length > 0) {
                res.status(402).json({
                    error: "Exclua os produtos desta categoria primeiro.",
                });
                return;
            }

            await Category.findByIdAndDelete(id);
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new deleteCategory();

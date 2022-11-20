import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../../models/Product";

class listProductsByCategory {
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

            // const products = await Product.find({
            //     category: id,
            // });

            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new listProductsByCategory();

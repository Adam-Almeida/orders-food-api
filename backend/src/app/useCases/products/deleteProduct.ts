import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../../models/Product";
import fs from "node:fs";
import path from "node:path";

class deleteProduct {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id || !mongoose.isValidObjectId(id)) {
                res.status(400).json({
                    error: "Digite um id válido para o produto.",
                });
                return;
            }
            const productById = await Product.findById(id);

            if (!productById) {
                res.status(400).json({
                    error: "O produto informado não existe.",
                });
                return;
            }

            //exclui a imagem da pasta
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
                fs.unlink(`${uploadDir}/${productById.imagePath}`, (err) => {
                    if (err) {
                        res.json({
                            error: `Erro ao excluir uploads anterios.`,
                        });
                    }
                });
            }

            await Product.findByIdAndDelete(id);
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new deleteProduct();

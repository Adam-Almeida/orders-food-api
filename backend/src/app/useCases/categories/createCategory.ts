import { Request, Response } from "express";
import { io } from "../../..";
import { Category } from "../../models/Category";

class CreateCategory {
    async handle(req: Request, res: Response) {
        try {
            const { name, icon } = req.body;

            if (!name || !icon) {
                res.status(400).json({ error: "Preencha todos os campos." });
                return;
            }

            const category = await Category.create({ name, icon });

            res.status(201).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new CreateCategory();

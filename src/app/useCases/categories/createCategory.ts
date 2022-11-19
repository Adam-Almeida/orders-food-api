import { Request, Response } from "express";
import { Category } from "../../models/Category";

class CreateCategory {
    async handle(req: Request, res: Response) {
        try {
            const { name, icon } = req.body;

            if (!name || !icon) {
                res.status(422).json({ error: "Preencha todos os campos." });
                return;
            }

            const category = await Category.create({ name, icon });

            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ error: "Internal server error." });
            console.error(error);
        }
    }
}

export default new CreateCategory();

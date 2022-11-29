import { Request, Response } from "express";
import { Category } from "../../models/Category";

class ListCategories {
    async handle(req: Request, res: Response) {
        try {
            const categories = await Category.find().sort([['name', 1]]).exec();
            res.json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new ListCategories();

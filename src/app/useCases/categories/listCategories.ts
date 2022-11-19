import { Request, Response } from "express";
import { Category } from "../../models/Category";

class ListCategories{
    async handle(req: Request, res: Response){
        const categories = await Category.find()
        res.status(200).json(categories)
    }
}

export default new ListCategories



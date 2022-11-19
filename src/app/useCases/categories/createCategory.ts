import { Request, Response } from "express";
import { Category } from "../../models/Category";

class CreateCategory {
    async handle(req: Request, res: Response) {
        const { name, icon } = req.body;

        if(!name || !icon){
            res.status(422).json({error: "Preencha todos os campos."})
            return
        }

        const category = await Category.create({name, icon});

        return res.status(200).json(category);
    }
}

export default new CreateCategory();

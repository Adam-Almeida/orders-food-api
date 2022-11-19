import { Request, Response } from "express";

class createProducts {
    async handle(req: Request, res: Response) {
        try {

            



        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new createProducts();

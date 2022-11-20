import { Request, Response } from "express";
import { Order } from "../../models/Order";

class CreateOrders {
    async handle(req: Request, res: Response) {
        try {
            const { table, products } = req.body;

            if (!table || !products) {
                res.status(400).json({ error: "Preencha todos os campos." });
                return;
            }

            const order = await Order.create({
                table,
                products,
            });

            res.status(201).json(order);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new CreateOrders();

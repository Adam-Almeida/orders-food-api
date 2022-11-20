import { Request, Response } from "express";
import { Order } from "../../models/Order";

class ListOrders {
    async handle(req: Request, res: Response) {
        try {
            const orders = await Order.find();
            res.json(orders);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new ListOrders();

import { Request, Response } from "express";
import { io } from "../../..";
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

            const orderDetails = await order.populate("products.product");

            io.emit("order@new", orderDetails);
            res.status(201).json(order);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new CreateOrders();

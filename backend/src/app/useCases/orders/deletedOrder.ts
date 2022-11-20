import { Request, Response } from "express";
import mongoose from "mongoose";
import { Order } from "../../models/Order";

class DeletedOrderStatus {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id || !mongoose.isValidObjectId(id)) {
                res.status(400).json({
                    error: "Informe um id válido para o pedido.",
                });
                return;
            }

            const status = "DELETED";

            await Order.findByIdAndUpdate(id, { status });
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new DeletedOrderStatus();

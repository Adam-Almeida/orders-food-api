import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";

const port = process.env.PORT || 3001;
const connection = "mongodb://localhost:27017";

mongoose
    .connect(connection)
    .then(() => {
        const app = express();

        app.use(express.json())
        app.use(router)

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        console.log("Conectando ao mongoDb");
    })
    .catch(() => console.log("Erro ao se conectar com o mongoDb"));

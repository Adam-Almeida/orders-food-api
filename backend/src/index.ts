require("dotenv").config();
import path from "node:path";
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes";
import http from "node:http";
import { Server } from "socket.io";

const port = process.env.PORT || 3001;
const connection = process.env.MONGO_DB;
const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
    .connect(connection!)
    .then(() => {
        app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            // res.setHeader("Access-Control-Allow-Methods", "*");
            // res.setHeader("Access-Control-Allow-Headers", "*");

            res.setHeader(
                "Access-Control-Allow-Methods",
                "GET,OPTIONS,PATCH,DELETE,POST,PUT"
            );
            res.setHeader(
                "Access-Control-Allow-Headers",
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
            );

            next();
        });

        app.use(
            "/uploads",
            express.static(path.resolve(__dirname, "..", "uploads"))
        );
        app.use(express.json());
        app.use(router);

        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        console.log("Conectando ao mongoDb");
    })
    .catch(() => console.log("Erro ao se conectar com o mongoDb"));

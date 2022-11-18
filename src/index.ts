import express from "express";
import mongoose from "mongoose";

const port = 3001;
const connection = "mongodb://localhost:27017";

const app = express();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    mongoose
        .connect(connection)
        .then(() => console.log("Conectando ao mongoDb"))
        .catch(() => console.log("Erro ao realizar conecção ao mongoDb"));
});

import axios from "axios";
import env from "react-dotenv";

export const api = axios.create({
    baseURL: `${env.URLBASE}`,
});

export const apiUpload = axios.create({
    baseURL: `${env.URLBASE}`,
    headers: { "Content-Type": "multipart/form-data" },
});

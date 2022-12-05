import axios from "axios";
import env from "react-dotenv";

export const api = axios.create({
    baseURL: "https://vercel-foodie-api-adam.vercel.app",
});

export const apiUpload = axios.create({
    baseURL: "https://vercel-foodie-api-adam.vercel.app",
    headers: { "Content-Type": "multipart/form-data" },
});

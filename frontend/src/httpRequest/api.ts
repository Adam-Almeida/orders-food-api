import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.1.1.182:3001",
});

export const apiUpload = axios.create({
    baseURL: "http://10.1.1.182:3001",
    headers: { "Content-Type": "multipart/form-data" },
});

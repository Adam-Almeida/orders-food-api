import axios from "axios";
const REACT_APP_URLBACKEND = "https://vercel-foodie-api-adam.vercel.app/";

export const api = axios.create({
    baseURL: REACT_APP_URLBACKEND,
});

export const apiUpload = axios.create({
    baseURL: REACT_APP_URLBACKEND,
    headers: { "Content-Type": "multipart/form-data" },
});

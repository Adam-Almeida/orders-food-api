import axios from "axios";
const REACT_APP_URLBACKEND =
    process.env.REACT_APP_DEV === "prod"
        ? process.env.REACT_APP_URLBACKEND
        : "http://127.0.0.1:4000/";

console.log(REACT_APP_URLBACKEND);

export const api = axios.create({
    baseURL: REACT_APP_URLBACKEND,
});

export const apiUpload = axios.create({
    baseURL: REACT_APP_URLBACKEND,
    headers: { "Content-Type": "multipart/form-data" },
});

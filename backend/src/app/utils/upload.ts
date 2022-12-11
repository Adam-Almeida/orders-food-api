require("dotenv").config();
import path from "node:path";
import { randomUUID } from "node:crypto";
import multer from "multer";
const cloudinary = require("cloudinary").v2;
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: process.env.YOUR_CLOUD_NAME,
    api_key: process.env.YOUR_API_KEY,
    api_secret: process.env.YOUR_API_SECRET,
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: "api_food",
            format: "jpeg",
            public_id: randomUUID(),
        };
    },
});

export const upload = multer({
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (
            ext !== ".png" &&
            ext !== ".jpg" &&
            ext !== ".gif" &&
            ext !== ".jpeg"
        ) {
            return callback(new Error("Only images are allowed"));
        }

        callback(null, true);
    },
    limits: {
        fileSize: 1024 * 1024,
    },

    storage: storage,
});

import path from "node:path";
import multer from "multer";

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

    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(
                null,
                path.resolve(__dirname, "..", "..", "..", "uploads")
            );
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

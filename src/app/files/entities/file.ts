import mongoose, { Schema } from "mongoose";


const FileSchema: Schema = new Schema(
    {
        filename: {
            type: String,
            required: true
        },
        mimetype: {
            type: String,
            required: true,
        },
    },
{timestamps: true});

export const File = mongoose.model("File", FileSchema); 
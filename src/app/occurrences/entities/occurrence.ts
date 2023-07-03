import mongoose, { Schema } from "mongoose";


const OccurrenceSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
        },
        kind: {
            type: String,
            required: true,
        },
        files: {
            type: Schema.Types.ObjectId,
            ref: "Files",
            required: true
        },
    },
{timestamps: true});

export const Occurrence = mongoose.model("Occurrence", OccurrenceSchema);
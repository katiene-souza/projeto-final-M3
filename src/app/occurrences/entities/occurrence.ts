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
        file: {
            type: Schema.Types.ObjectId,
            ref: "File"
        },
    },
{timestamps: true});

export const Occurrence = mongoose.model("Occurrence", OccurrenceSchema);
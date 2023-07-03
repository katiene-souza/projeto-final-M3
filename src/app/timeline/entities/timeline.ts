import mongoose, { Schema } from "mongoose";


const TimelinesSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        occurrences: {
            type: Schema.Types.ObjectId,
            ref: "Occurrence",
            required: true
        },
    },
{timestamps: true});

export const Timelines = mongoose.model("Timelines", TimelinesSchema);
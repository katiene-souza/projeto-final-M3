import mongoose, { Schema } from "mongoose";


const TimelineSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        occurrences: [{
            type: Schema.Types.ObjectId,
            ref: "Occurrence",
            required: true
        }],
    },
{timestamps: true});

export const Timeline = mongoose.model("Timeline", TimelineSchema);
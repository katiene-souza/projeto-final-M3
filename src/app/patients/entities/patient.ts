import mongoose, { Schema } from "mongoose";


const PatientSchema: Schema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        timelines: {
            type: Schema.Types.ObjectId,
            ref: "Timelines",
            required: true
        },
        name: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true,
        },
        birthdate: {
            type: Date,
            required: true,
        },
        demands: {
            type: String,
        },
        personalAnnotations: {
            type: String,
        },
    },
{timestamps: true});

export const Patient = mongoose.model("Patient", PatientSchema);
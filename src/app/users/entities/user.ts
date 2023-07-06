import mongoose, { Schema } from "mongoose";


const UserSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        photo: {
            type: Schema.Types.ObjectId,
            ref: "File",
            required: true
        },
    },
{timestamps: true});

export const User = mongoose.model("User", UserSchema);
import mongoose, { Schema } from "mongoose";


const UserSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        nickName: {
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
            ref: "Photo",
            required: true
        },
    },
{timestamps: true});

export const User = mongoose.model("User", UserSchema);
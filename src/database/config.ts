import mongoose from "mongoose";

export async function connectionToDatabase () {
    try {
        await mongoose.connect(process.env.DATABASE_URL as string);
        console.log("connected to database");
    } catch(error) {
        console.log("database connection error", error);
    };
};
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://swoorupkisan9437702058:mM8txscQnbNBYKds@cluster0.yd43q.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
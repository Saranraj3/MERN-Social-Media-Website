import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// MongoDB Connection 
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Database Connected')
}).catch((err) => {
    console.log(err)
})


app.listen(() => {
    console.log(`Server Running ${process.env.PORT}`);
})
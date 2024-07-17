import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import SignupRoute from './Routes/SignupRoute.js';
dotenv.config();

const app = express();

// MongoDB Connection 
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Database Connected')
}).catch((err) => {
    console.log(err)
})

app.use(express.json());

// Routes
app.use('/auth',SignupRoute)

app.listen(process.env.PORT,() => {
    console.log(`Server Running ${process.env.PORT}`);
})
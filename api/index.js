import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';

import path from 'path';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB!");
    }).catch((err) => {
        console.log(err);
});

const __dirname = path.resolve();


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server is running on port 3001");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter)

app.use(express.static(path.join(__dirname, '/client/dist')));  

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({ 
        success: false,
        statusCode,
        message, 
    });
});


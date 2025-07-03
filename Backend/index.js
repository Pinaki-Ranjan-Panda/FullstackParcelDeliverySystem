import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import parcelRoute from './routes/parcel.js';

dotenv.config();
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/parcel', parcelRoute);

// DATABASE CONNECTION
const DB = process.env.DB;
mongoose.connect(DB).then(() => {
  console.log('Database connected successfully');
}).catch((err) => {
  console.log(err)
});

// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

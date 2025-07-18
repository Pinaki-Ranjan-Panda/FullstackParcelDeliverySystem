import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import parcelRoute from "./routes/parcel.js";

dotenv.config();
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/parcels', parcelRoute);

// DATABASE CONNECTION
const DB = process.env.DB;
const PORT = process.env.PORT;
mongoose.connect(DB).then(() => {
  console.log('Database connected successfully');
}).catch((err) => {
  console.log(err)
});

// SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

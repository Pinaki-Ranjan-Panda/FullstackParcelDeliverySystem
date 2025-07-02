const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const parcelRoute = require('./routes/parcel');

dotenv.config();
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/parcel', parcelRoute);


//DATABASE CONNECTION
const DB = process.env.DB;
mongoose.connect(DB).then(() => {
  console.log('Database connected successfully');
}).catch((err) => {
  console.log(err)
});

//SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

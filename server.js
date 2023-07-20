//import section
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import indexRoute from './routes/index.js';

const app = express();
app.use(express.json());

app.use(cors());

dotenv.config();
connectDB();

app.use('/api', indexRoute);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on Port: ${port}`));

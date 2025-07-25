import dotenv from 'dotenv';
import connectDB from './config/db.js';
import express from 'express';
import  cors from 'cors';
import router from './routes/userRoutes.js';
dotenv.config();
connectDB();
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());


app.use('/api/users', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

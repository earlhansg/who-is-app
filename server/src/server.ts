import express, { Express, Request, Response } from 'express';
import { json } from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import domainRoutes from './routes/domain';

dotenv.config();

const app: Express = express();
app.use(json());
app.use(cors());

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/', domainRoutes);

const uri: string =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/your-app';

(async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch(error) {
        console.error(error);
    }
})();

app.get('/health', (_req: Request, res: Response) => {
    res.status(200).send('Server is running test');
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
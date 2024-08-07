// libs 
import express, { Express, Request, Response } from 'express';
import { json } from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
// route
import domainRoutes from './routes/domain';

dotenv.config();

const app: Express = express();
app.use(json());
app.use(cors());

// Routes
app.use('/api/', domainRoutes);

app.get('/health', (_req: Request, res: Response) => {
    res.status(200).send(`Server is running test`);
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
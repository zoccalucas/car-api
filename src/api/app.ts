import { categoriesRoutes } from './routes/categories.routes';
import express from 'express';

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

export { app };

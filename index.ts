import { log } from 'console';
import express, { Router } from 'express';
import connectDB from './database';
import routerAnswer from './src/routes/answers';


connectDB();

const app = express();
app.use(express.json());
app.use('/answer', routerAnswer);

app.listen(8085, () => console.log('Server activo'));
import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const { PORT } = process.env;
import todoRoutes from './routes/todos';


//bodyParsing middleware
app.use(express.json());

//todo routes middleware
app.use('/todos', todoRoutes);

//Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    console.log(next)
    res.status(500).json({message: err.message});
})

app.listen(PORT, ()=>console.log(`Server started at port number: ${PORT}`))
import "reflect-metadata";
import express, {Request, Response, NextFunction} from 'express';
import "express-async-errors";

import { Router } from './routes/'

import "./api/database";// conection with database

const app = express();

app.use(express.json());

Router.execute(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({message: err.message})
    }
    res.status(500).json({status: 'error' , message: "Internal Server Error"})
})

app.listen(3000 , () => console.log("Server is running NLW"))
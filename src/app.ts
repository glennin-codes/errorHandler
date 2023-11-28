import express, { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from './helper/ErrorHandler.js';
import createHttpError from 'http-errors';

const app:express.Application=express();
const port:number=3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World');
});
app.use(ErrorHandler);
app.use(
    (req:Request,res:Response,next:NextFunction)=>{
        next(createHttpError(404,"endpoint is unkown"))
    }
);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
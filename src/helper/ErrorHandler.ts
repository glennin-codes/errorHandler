import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { isHttpError } from "http-errors";
export const ErrorHandler:ErrorRequestHandler=(err:unknown,req:Request,res:Response,next:NextFunction)=>{
    console.error(err);
    let statusCode:number=500;
    let errorMessage:string='internal server Error';
    if(isHttpError(err)){
        statusCode=err.statusCode;
        errorMessage=err.message;

    }
    res.status(statusCode).json(errorMessage);
}
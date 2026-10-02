import { Request, Response, NextFunction } from "express";
import {logger} from '../lib/logger'

export function errorHandler(
    err:Error,
    _req:Request,
    res:Response,
    _next:NextFunction
):void{
    logger.error({err},"unhandled error");

    res.status(500).json({
        status:false,
        message:"Internal server error",
    });
}
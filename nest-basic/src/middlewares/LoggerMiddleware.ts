import {Injectable, NestMiddleware } from "@nestjs/common";
import { Request ,Response, NextFunction} from 'express';


export function LoggerMiddleware (req:Request, res:Response, next:NextFunction) {
  console.log(`Request...[INFO] ${req.method} ${req.baseUrl}`);
  next();
  console.log(`Response...[INFO] ${res.statusCode}`);
}

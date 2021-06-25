import { Request , Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;

    if (!authToken) return res.status(401).json({message: "Invalid token"});

    const [,token] = authToken.split(' ');

    try {
        const {sub} = verify(token, "b25d8e478224a9c8cba985065dcfb123") as IPayload; // FORÇA ELE A RECERBER A INTERFACE

        req.user_id = sub

        return next();
    }catch (err){
        return res.status(401).end(err);
    }
    
    
}
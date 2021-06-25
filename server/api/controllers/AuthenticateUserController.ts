import { Request , Response } from "express";
import {AuthenticateUserService} from "../services/AuthenticateUserService"

class AuthenticateUserController{
    static async handle(req: Request, res: Response){
        const { email, password} = req.body;

        const token = await AuthenticateUserService.execute({email, password});

        return res.json(token);

    }
}

export {AuthenticateUserController}
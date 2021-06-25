import { Request , Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
    static async handle(req: Request, res: Response){
        const { name, email , admin, password } = req.body;

        const user = await CreateUserService.execute({name, email, admin, password})

        return res.json(user);
    }
}

export {CreateUserController}
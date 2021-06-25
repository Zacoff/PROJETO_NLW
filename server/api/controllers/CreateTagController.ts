import { Request , Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController{
    static async handle(req: Request, res: Response){
        const { name } = req.body;

        const tag = await CreateTagService.execute(name)

        return res.json(tag);
    }
}

export { CreateTagController }
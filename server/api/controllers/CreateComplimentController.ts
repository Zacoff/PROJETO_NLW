import { Request , Response } from "express";
import { CreateComplimentService } from "../services/CreateCompliments";

class CreateComplimentController {
    static async handle(req: Request, res: Response){

        const { tag_id, user_receiver, message } = req.body;

        const { user_id } = req;

        const compliment = await CreateComplimentService.execute({tag_id, user_sender: user_id, user_receiver, message});

        return res.json(compliment);
    }
}

export { CreateComplimentController }
import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";



class ListUserSendComplimentsController {
    static async handle(req: Request, res: Response){

        const { user_id } = req;

        const compliments = await ListUserSendComplimentsService.execute(user_id);

        return res.json(compliments);
    }
}

export {ListUserSendComplimentsController}
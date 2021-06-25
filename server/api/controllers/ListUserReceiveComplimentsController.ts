import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
    static async handle(req: Request, res: Response){
        const { user_id } = req;

        const compliments = await ListUserReceiveComplimentsService.execute(user_id);

        return res.json(compliments);
    }
}

export {ListUserReceiveComplimentsController}
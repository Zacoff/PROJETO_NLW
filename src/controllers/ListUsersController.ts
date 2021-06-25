import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";


class ListUsersController {

    static async handle(req: Request, res: Response){
        const users = await ListUsersService.execute()

        return res.json(users)
    }
}

export { ListUsersController }
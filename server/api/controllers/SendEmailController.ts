import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";
import * as nodemailer from "nodemailer"

const user = "daniel.dfa81@gmail.com"
const pass = "Qwdfvb12"

class SendEmailController {
    static async handle(req: Request, res: Response){

        const { user_id } = req;

        const compliments = await ListUserSendComplimentsService.execute(user_id);

        let info = {}

        // compliments.forEach((info) => {

        //     

        // })

        res.json(compliments)
    }
}

export {SendEmailController}
import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UserRepositories"


interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    static async execute({ tag_id, user_sender, user_receiver, message } :IComplimentRequest){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        const userRepositories = getCustomRepository(UsersRepositories);

        if (user_sender === user_receiver) throw new Error(`Incorrect User Receiver`);

        const userReceiverExist = await userRepositories.findOne(user_receiver);

        if(!userReceiverExist) throw new Error(`User does not exist`);

        const compliment = complimentsRepository.create({tag_id, user_sender, user_receiver, message});

        await complimentsRepository.save(compliment);

        return compliment;
    }

    

}

export { CreateComplimentService }
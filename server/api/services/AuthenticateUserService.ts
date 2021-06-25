import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { UsersRepositories } from "../repositories/UserRepositories"
import {EmailOrPasswordError} from "../errors/EmailOrPasswordError"


interface IAunthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    static async execute({email , password}:IAunthenticateRequest){
        const userRepositories = getCustomRepository(UsersRepositories);
        
        const user = await userRepositories.findOne({email});

        if(!user) throw new EmailOrPasswordError();

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) throw new EmailOrPasswordError();

        const token = sign(
            {
                email: user.email,
            },
            "b25d8e478224a9c8cba985065dcfb123",
            {
                subject: user.id,
                expiresIn: '1d'
            }
        );

        return token;
    }
}

export { AuthenticateUserService }
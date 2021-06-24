import { getCustomRepository } from "typeorm";
import { IncorrectEmailError } from "../errors/IncorrectEmailError";
import { UsersRepositories } from '../repositories/UserRepositories';
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService{
    async execute({name, email, admin = false /* valor default */ , password } : IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) throw new IncorrectEmailError();

        const userAlreadyExists = await usersRepository.findOne({email});

        if(userAlreadyExists){
            throw new Error(`User ${name} already exists`);
        }

        const passwordHash = await hash(password , 8);
        
        const user = usersRepository.create({name, email, admin, password : passwordHash});

        await usersRepository.save(user);

        return user;
    }

    
}

export { CreateUserService }
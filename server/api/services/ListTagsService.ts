import { TagsRepositories } from "../repositories/TagsRepositories";
import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer"

class ListTagsService {
    static async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        return classToPlain(tags);
    }
}

export { ListTagsService }
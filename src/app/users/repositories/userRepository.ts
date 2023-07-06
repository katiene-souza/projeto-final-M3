import { CreateUserServiceDTO } from "../dtos/createUserDto";
import { User } from "../entities/user";

export class UserRepository {
    constructor(private model: typeof User) {};

    async createUser(user: CreateUserServiceDTO) {
        return this.model.create(user);
    };

    async findByEmail(email: string) {
        return this.model.findOne({ email }).populate("photo");
    };

    async findByNickname(nickname: string) {
        return this.model.findOne({ nickname }).populate("photo");
    };
};
import { compareSync } from "bcrypt";
import * as JWT from "jsonwebtoken";

import { UserRepository } from "../../users/repositories/userRepository";
import { LoginDto } from "../dtos/loginDto";

export class AuthService {
    constructor(private userRepository: UserRepository){};

    async login(params: LoginDto) {
        const user = await this.userRepository.findByEmail(params.email);
        if(!user) {
            return {error: true, message: 'E-mail/password invalid', status: 400};
        };

        const password = compareSync(params.password, user.password);
        if(!password) {
            return {error: true, message: 'E-mail/password invalid', status: 400};
        };

        const payload = { id: user.id };
        const secretKey = process.env.SECRET_KEY as string;
        const options = { expiresIn: '30m'};

        const token = JWT.sign(payload, secretKey, options);

        return { token, user };
    };
};
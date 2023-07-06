import { User } from "./entities/user";

import { UserController } from "./controllers/userController";
import { UserRepository } from "./repositories/userRepository";
import { UserService } from "./services/userService";

import { FileModule } from "../files/fileModule";
export class UserModule {
    static build() {
        const userRepository = new UserRepository(User);
        const userService = new UserService(userRepository, FileModule.build().fileRepository);
        const userControler = new UserController(userService);

        return { userRepository, userService, userControler, }
    };
};
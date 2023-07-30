"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const user_1 = require("./entities/user");
const userController_1 = require("./controllers/userController");
const userRepository_1 = require("./repositories/userRepository");
const userService_1 = require("./services/userService");
const fileModule_1 = require("../files/fileModule");
class UserModule {
    static build() {
        const userRepository = new userRepository_1.UserRepository(user_1.User);
        const userService = new userService_1.UserService(userRepository, fileModule_1.FileModule.build().fileRepository);
        const userControler = new userController_1.UserController(userService);
        return { userRepository, userService, userControler, };
    }
    ;
}
exports.UserModule = UserModule;
;

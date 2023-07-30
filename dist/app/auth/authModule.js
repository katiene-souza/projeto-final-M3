"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const userModule_1 = require("../users/userModule");
const authController_1 = require("./controllers/authController");
const AuthService_1 = require("./services/AuthService");
class AuthModule {
    static build() {
        const authService = new AuthService_1.AuthService(userModule_1.UserModule.build().userRepository);
        const authControler = new authController_1.AuthController(authService);
        return {
            authService,
            authControler
        };
    }
    ;
}
exports.AuthModule = AuthModule;
;

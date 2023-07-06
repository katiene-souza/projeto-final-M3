import { UserModule } from "../users/userModule";
import { AuthController } from "./controllers/authController";
import { AuthService } from "./services/AuthService";

export class AuthModule {
    static build() {
        const authService = new AuthService(UserModule.build().userRepository);
        const authControler = new AuthController(authService);

        return {
            authService,
            authControler
        };
    };
};
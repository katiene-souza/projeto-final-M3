import { Router } from "express";
import { UserModule } from "../app/users/userModule";
import { upload } from "../config/storageConfig";
import { AuthModule } from "../app/auth/authModule";
import { Authenticate } from "../common/middlewares/authenticate";

export const router = Router();

const userController = UserModule.build().userControler;
const authController = AuthModule.build().authControler;

router.post('/users', upload.single('photo'), userController.createUser.bind(userController));
router.post('/auth', authController.login.bind(authController));

router.use(Authenticate.execute);

router.patch('/users/:userId', userController.userUpdate.bind(userController));
router.delete('/users/:userId', userController.deleteUser.bind(userController));
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = require("bcrypt");
class UserService {
    constructor(userRepository, fileRepository) {
        this.userRepository = userRepository;
        this.fileRepository = fileRepository;
    }
    ;
    createUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailAlreadyExist = yield this.userRepository.findByEmail(params.email);
            if (emailAlreadyExist) {
                return { error: true, message: 'Email already exists', status: 400 };
            }
            ;
            const nicknameAlreadyExist = yield this.userRepository.findByNickname(params.nickname);
            if (nicknameAlreadyExist) {
                return { error: true, message: 'nickname already exists', status: 400 };
            }
            ;
            const photo = yield this.fileRepository.createPhoto(params.photo);
            const newUser = Object.assign(Object.assign({}, params), { password: (0, bcrypt_1.hashSync)(params.password, 8), photo: photo.id });
            const newUserResult = yield this.userRepository.createUser(newUser);
            return Object.assign(Object.assign({}, newUserResult._doc), { photo: photo });
        });
    }
    ;
    userUpdate(userId, userUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUserUpdate = yield this.userRepository.userUpdate(userId, userUpdate);
                return {
                    message: 'user updated',
                    status: 200,
                    data: newUserUpdate
                };
            }
            catch (error) {
                return ({ error: true, message: "internal server error", status: 500 });
            }
            ;
        });
    }
    ;
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.userRepository.deletedUser(userId);
                return {
                    message: 'deleted user',
                    status: 200,
                };
            }
            catch (error) {
                return ({ error: true, message: "internal server error", status: 500 });
            }
            ;
        });
    }
    ;
}
exports.UserService = UserService;
;

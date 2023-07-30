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
exports.UserController = void 0;
const createUserSchema_1 = require("../schemas/createUserSchema");
class UserController {
    constructor(service) {
        this.service = service;
    }
    ;
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body: user, file } = req;
            try {
                yield (0, createUserSchema_1.makeCreateUserSchema)().validate(user);
            }
            catch (err) {
                return res.status(400).json({
                    errors: err.errors,
                });
            }
            ;
            const payload = Object.assign(Object.assign({}, user), { photo: {
                    filename: file === null || file === void 0 ? void 0 : file.filename,
                    mimetype: file === null || file === void 0 ? void 0 : file.mimetype,
                } });
            const newUser = yield this.service.createUser(payload);
            if ('error' in newUser) {
                return res.status(newUser.status).json(newUser);
            }
            ;
            return res.status(201).json(newUser);
        });
    }
    ;
    userUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { userId }, body: user } = req;
            if (!userId) {
                return ({
                    error: 400,
                    message: 'id not found'
                });
            }
            ;
            try {
                yield (0, createUserSchema_1.makeCreateUserSchema)().validate(user);
            }
            catch (err) {
                return res.status(400).json({
                    errors: err.errors,
                });
            }
            ;
            const newUserUpdate = yield this.service.userUpdate(userId, user);
            if ('error' in newUserUpdate) {
                return res.status(newUserUpdate.error).json(newUserUpdate);
            }
            res.status(201).json(newUserUpdate);
        });
    }
    ;
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { userId } } = req;
            if (!userId) {
                return ({
                    error: 400,
                    message: 'id not found',
                });
            }
            ;
            const deletedUser = yield this.service.deleteUser(userId);
            if ('error' in deletedUser) {
                return res.status(deletedUser.error).json(deletedUser);
            }
            ;
            res.status(201).json(deletedUser);
        });
    }
    ;
}
exports.UserController = UserController;
;

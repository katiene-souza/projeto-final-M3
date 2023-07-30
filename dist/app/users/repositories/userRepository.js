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
exports.UserRepository = void 0;
class UserRepository {
    constructor(model) {
        this.model = model;
    }
    ;
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(user);
        });
    }
    ;
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne({ email }).populate("photo");
        });
    }
    ;
    findByNickname(nickname) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne({ nickname }).populate("photo");
        });
    }
    ;
    userUpdate(userId, userUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndUpdate({ _id: userId }, userUpdate, { new: true });
        });
    }
    ;
    deletedUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndDelete({ _id: userId });
        });
    }
    ;
}
exports.UserRepository = UserRepository;
;

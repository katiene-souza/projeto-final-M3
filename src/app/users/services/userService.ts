import { FileRepository } from "../../files/repositories/fileRepository";
import { CreateUserDTO, CreateUserServiceDTO } from "../dtos/createUserDto";
import { UserRepository } from "../repositories/userRepository";

import { hashSync } from "bcrypt";

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private fileRepository: FileRepository,
  ) { };

  async createUser(params: CreateUserServiceDTO) {

    const emailAlreadyExist = await this.userRepository.findByEmail(params.email);
    if (emailAlreadyExist) {
      return { error: true, message: 'Email already exists', status: 400 };
    };

    const nicknameAlreadyExist = await this.userRepository.findByNickname(params.nickname);
    if (nicknameAlreadyExist) {
      return { error: true, message: 'nickname already exists', status: 400 }
    };

    const photo = await this.fileRepository.createPhoto(params.photo);

    const newUser = {
      ...params,
      password: hashSync(params.password, 8),
      photo: photo.id,
    };

    const newUserResult = await this.userRepository.createUser(newUser);


    return { ...(newUserResult as any)._doc, photo: photo };
  };


  async userUpdate(userId: string, userUpdate: CreateUserDTO) {

    if (!userId) {
      return ({
        error: 400,
        message: 'id not found'
      });
    };

    const newUserUpdate = await this.userRepository.userUpdate(userId, userUpdate);
   
    return {
      message: 'user updated',
      status: 200,
      data: newUserUpdate
    };
  };

  async deleteUser(userId: string) {
    const deletedUser = await this.userRepository.deletedUser(userId);
    if (!deletedUser) {
      return ({
        error: 400,
        message: 'id not found',
      });
    };

    return {
      message: 'deleted user',
      status: 200,
    };
  };
};
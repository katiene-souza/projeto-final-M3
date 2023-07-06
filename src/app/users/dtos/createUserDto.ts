import { CreateFileDTO } from "../../files/dtos/createFileDto";

export interface CreateUserDTO {
    name: string;
    nickname: string;
    email: string;
    password: string;
    photo: string;
  };

  export interface CreateUserServiceDTO {
    name: string;
    nickname: string;
    email: string;
    password: string;
    photo: CreateFileDTO;
  };
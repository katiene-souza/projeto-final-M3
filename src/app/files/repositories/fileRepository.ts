import { CreateFileDTO } from "../dtos/createFileDto";
import { File } from "../entities/file";

export class FileRepository {
    constructor(private model: typeof File) {};

    async createPhoto(photo: CreateFileDTO) {
        return this.model.create(photo);
    };
};
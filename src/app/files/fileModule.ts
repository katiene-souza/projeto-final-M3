import { File } from "./entities/file";
import { FileRepository } from "./repositories/fileRepository";

export class FileModule {
    static build() {
        const fileRepository = new FileRepository(File);
        return { fileRepository };
    };
};
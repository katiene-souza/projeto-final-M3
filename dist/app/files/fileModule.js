"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModule = void 0;
const file_1 = require("./entities/file");
const fileRepository_1 = require("./repositories/fileRepository");
class FileModule {
    static build() {
        const fileRepository = new fileRepository_1.FileRepository(file_1.File);
        return { fileRepository };
    }
    ;
}
exports.FileModule = FileModule;
;

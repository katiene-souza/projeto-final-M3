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
const patientService_1 = require("./patientService");
const repository = { createPatient: jest.fn() };
const service = new patientService_1.PatientService(repository);
describe("test patient", () => {
    it("should create a patient", () => __awaiter(void 0, void 0, void 0, function* () {
        const mock = {
            user: "123",
            patientId: "23344",
            name: "Ana Maria",
            contact: "999999999",
            birthdate: "10/06/2001",
            demands: "A demanda do paciente...",
            personalAnnotations: "O paciente possui..."
        };
        const expectedResponse = {
            message: "patient created",
            statusCode: 201,
            data: mock,
        };
        jest.spyOn(repository, "createPatient").mockResolvedValue(mock);
        const response = yield service.createPatient(mock);
        expect(response).toStrictEqual(expectedResponse);
    }));
});

import { PatientService } from "./patientService";

const repository = { createPatient: jest.fn()};
const service = new PatientService(repository as any);


describe("test patient", () => {

    it("should create a patient", async () => {
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

        jest.spyOn(repository, "createPatient").mockResolvedValue(mock as any);

        const response = await service.createPatient(mock);

        expect(response).toStrictEqual(expectedResponse);

    });
}); 
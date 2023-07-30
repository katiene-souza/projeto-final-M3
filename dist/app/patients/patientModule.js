"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModule = void 0;
const patient_1 = require("./entities/patient");
const patientRepository_1 = require("./repositories/patientRepository");
const patientService_1 = require("./services/patientService");
const patientController_1 = require("./controllers/patientController");
class PatientModule {
    static build() {
        const patientRepository = new patientRepository_1.PatientRepository(patient_1.Patient);
        const patientService = new patientService_1.PatientService(patientRepository);
        const patientControler = new patientController_1.PatientController(patientService);
        return { patientRepository, patientService, patientControler };
    }
    ;
}
exports.PatientModule = PatientModule;
;

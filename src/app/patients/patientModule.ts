import { Patient } from "./entities/patient";

import { PatientRepository } from "./repositories/patientRepository";
import { PatientService } from "./services/patientService";
import { PatientController } from "./controllers/patientController";

export class PatientModule {
    static build() {
        const patientRepository = new PatientRepository(Patient);
        const patientService = new PatientService(patientRepository);
        const patientControler = new PatientController(patientService);

        return { patientRepository, patientService, patientControler }
    };
};
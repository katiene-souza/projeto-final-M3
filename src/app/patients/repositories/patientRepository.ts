import { CreatePatientDTO, CreatePatientIdDTO } from "../dtos/createPatientDto";
import { Patient } from "../entities/patient";

export class PatientRepository {
    constructor(private model: typeof Patient) { };

    async createPatient(patient: CreatePatientDTO) {
        return this.model.create(patient);
    };

    async findAllPatientByUser(userId: string) {
        return this.model.find({ user: userId });
    };

    async findPatientById(patientId: string) {
        return this.model.findById(patientId);
    };

    async patientUpdate(patientId: string, patientUpdate: CreatePatientDTO) {
        return this.model.findByIdAndUpdate(
            { _id: patientId },
            patientUpdate,
            { new: true });
    };

    async pushTimeline(patientId: string, timelineId: string) {
        return this.model.findByIdAndUpdate(patientId, {
            $push: {
                timelines: [timelineId],
            },
        }, {new: true}).populate("timelines");
    }; 
};
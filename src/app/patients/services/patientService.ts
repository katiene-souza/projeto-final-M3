import { CreatePatientDTO, CreatePatientIdDTO, CreatePatientServiceDTO } from "../dtos/createPatientDto";
import { PatientRepository } from "../repositories/patientRepository";

export class PatientService {
    constructor(
        private patientRepository: PatientRepository, 
    ) {};

    async createPatient(patient: CreatePatientDTO) {
        try {
            const newPatient = await this.patientRepository.createPatient(patient);

            return newPatient
        } catch(error) {
            return { error: true, message: "internal server error", status: 500 };
        };
    };

    async findAllPatientByUser(userId: string) {
        try {
            return this.patientRepository.findAllPatientByUser(userId);
        } catch(error) {
            return { error: true, message: "internal server error", status: 500 };
        };
    };

    async findPatientById(payload: CreatePatientIdDTO) {
        try {
            return this.patientRepository.findPatientById(payload.patientId);
        } catch(error) {
            return { error: true, message: "internal server error", status: 500 };
        };
    };

    async patientUpdate(payload: CreatePatientServiceDTO) {
        if (!payload) {
            return ({
              error: 400,
              message: 'id not found'
            });
          };
      
          const newPatientUpdate = await this.patientRepository.patientUpdate(payload.patientId, payload );
         
          return {
            message: 'patient updated',
            status: 200,
            data: newPatientUpdate
          };
        };
      
    }

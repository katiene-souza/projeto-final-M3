export interface CreatePatientDTO {
    name: string;
    contact: string;
    birthdate: string;
    demands: string;
    personalAnnotations: string;
    user?: string;
    patientId: string
  };

export interface CreatePatientIdDTO {
    userId: string;
    patientId: string;
}

export interface CreatePatientServiceDTO {
  name: string;
  contact: string;
  birthdate: string;
  demands: string;
  personalAnnotations: string;
  user?: string
  userId: string;
  patientId: string;
}
import { Request, Response } from "express";
import { PatientService } from "../services/patientService";
import { makeCreatePatientSchema } from "../schemas/patientSchema";


export class PatientController {
    constructor(private service: PatientService) { };

    async createPatient(req: Request, res: Response) {
        const { body: patient, params: { userId }, } = req;

        if (!userId) {
            return res.status(400).json({
                message: "id not defined",
            });
        };

        try {
            await makeCreatePatientSchema().validate(patient);
        } catch (err: any) {
            return res.status(400).json({
                errors: err.errors,
            });
        };

        const newPatient = await this.service.createPatient({ ...patient, user: userId }) as any;
        if ('error' in newPatient) {
            return res.status(newPatient.status).json(newPatient);
        };

        return res.status(201).json(newPatient);
    };

    async findAllPatientByUser(req: Request, res: Response) {
        const { params: { userId } } = req;

        if (!userId) {
            return res.status(400).json({
                message: "id not defined",
            });
        };

        const findAllPatient = await this.service.findAllPatientByUser(userId) as any;
        if ('error' in findAllPatient) {
            return res.status(findAllPatient.status).json(findAllPatient);
        };

        return res.status(201).json(findAllPatient);
    };

    async findPatientById(req: Request, res: Response) {
        const { params: { userId, patientId } } = req;

        if (!userId && patientId) {
            return res.status(400).json({
                message: "id not defined",
            });
        };

        const payload = {
            userId,
            patientId
        }

        const result = await this.service.findPatientById(payload) as any;
        if ('error' in result) {
            return res.status(result.status).json(result);
        };

        return res.status(201).json(result);
    };

    async patientUpadate(req: Request, res: Response) {
        const { params: { patientId }, body: patient } = req;

        if (!patientId) {
            return res.status(400).json({
                message: "id not defined",
            });
        };

        try {
            await makeCreatePatientSchema().validate(patient);

        } catch (err: any) {
            return res.status(400).json({
                errors: err.errors,
            });
        };

        const payload = {
            ...patient,
            patientId
        };

        const newPatientUpdate = await this.service.patientUpdate(payload) as any;
        if ('error' in newPatientUpdate) {
            return res.status(newPatientUpdate.error).json(newPatientUpdate);
        };

        res.status(201).json(newPatientUpdate);
    };
};
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
exports.PatientController = void 0;
const patientSchema_1 = require("../schemas/patientSchema");
class PatientController {
    constructor(service) {
        this.service = service;
    }
    ;
    createPatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body: patient, params: { userId }, } = req;
            if (!userId) {
                return res.status(400).json({
                    message: "id not defined",
                });
            }
            ;
            try {
                yield (0, patientSchema_1.makeCreatePatientSchema)().validate(patient);
            }
            catch (err) {
                return res.status(400).json({
                    errors: err.errors,
                });
            }
            ;
            const newPatient = yield this.service.createPatient(Object.assign(Object.assign({}, patient), { user: userId }));
            if ('error' in newPatient) {
                return res.status(newPatient.status).json(newPatient);
            }
            ;
            return res.status(201).json(newPatient);
        });
    }
    ;
    findAllPatientByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { userId } } = req;
            if (!userId) {
                return res.status(400).json({
                    message: "id not defined",
                });
            }
            ;
            const findAllPatient = yield this.service.findAllPatientByUser(userId);
            if ('error' in findAllPatient) {
                return res.status(findAllPatient.status).json(findAllPatient);
            }
            ;
            return res.status(201).json(findAllPatient);
        });
    }
    ;
    findPatientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { userId, patientId } } = req;
            if (!userId && patientId) {
                return res.status(400).json({
                    message: "id not defined",
                });
            }
            ;
            const payload = {
                userId,
                patientId
            };
            const result = yield this.service.findPatientById(payload);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            ;
            return res.status(201).json(result);
        });
    }
    ;
    patientUpadate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { patientId }, body: patient } = req;
            if (!patientId) {
                return res.status(400).json({
                    message: "id not defined",
                });
            }
            ;
            try {
                yield (0, patientSchema_1.makeCreatePatientSchema)().validate(patient);
            }
            catch (err) {
                return res.status(400).json({
                    errors: err.errors,
                });
            }
            ;
            const payload = Object.assign(Object.assign({}, patient), { patientId });
            const newPatientUpdate = yield this.service.patientUpdate(payload);
            if ('error' in newPatientUpdate) {
                return res.status(newPatientUpdate.error).json(newPatientUpdate);
            }
            ;
            res.status(201).json(newPatientUpdate);
        });
    }
    ;
}
exports.PatientController = PatientController;
;

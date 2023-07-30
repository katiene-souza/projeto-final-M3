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
exports.PatientService = void 0;
class PatientService {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    ;
    createPatient(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPatient = yield this.patientRepository.createPatient(patient);
                return ({
                    message: "patient created",
                    statusCode: 201,
                    data: newPatient
                });
            }
            catch (error) {
                return { error: true, message: "internal server error", status: 500 };
            }
            ;
        });
    }
    ;
    findAllPatientByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.patientRepository.findAllPatientByUser(userId);
            }
            catch (error) {
                return { error: true, message: "internal server error", status: 500 };
            }
            ;
        });
    }
    ;
    findPatientById(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.patientRepository.findPatientById(payload.patientId);
            }
            catch (error) {
                return { error: true, message: "internal server error", status: 500 };
            }
            ;
        });
    }
    ;
    patientUpdate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPatientUpdate = yield this.patientRepository.patientUpdate(payload.patientId, payload);
                return {
                    message: 'patient updated',
                    status: 200,
                    data: newPatientUpdate
                };
            }
            catch (error) {
                return { error: true, message: "internal server error", status: 500 };
            }
            ;
        });
    }
    ;
}
exports.PatientService = PatientService;
;

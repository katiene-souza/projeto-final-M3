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
exports.PatientRepository = void 0;
class PatientRepository {
    constructor(model) {
        this.model = model;
    }
    ;
    createPatient(patient) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(patient);
        });
    }
    ;
    findAllPatientByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({ user: userId });
        });
    }
    ;
    findPatientById(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findById(patientId);
        });
    }
    ;
    patientUpdate(patientId, patientUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndUpdate({ _id: patientId }, patientUpdate, { new: true });
        });
    }
    ;
    pushTimeline(patientId, timelineId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndUpdate(patientId, {
                $push: {
                    timelines: [timelineId],
                },
            }, { new: true }).populate("timelines");
        });
    }
    ;
}
exports.PatientRepository = PatientRepository;
;

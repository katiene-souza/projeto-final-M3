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
exports.OccurrenceController = void 0;
const createOccurrenceSchema_1 = require("../schemas/createOccurrenceSchema");
class OccurrenceController {
    constructor(service) {
        this.service = service;
    }
    ;
    createOccurrence(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body: occurrence, params: { timelineId } } = req;
            if (!timelineId) {
                return res.status(400).json({
                    message: "id not defined"
                });
            }
            ;
            try {
                yield (0, createOccurrenceSchema_1.makeCreateOccurenceSchema)().validate(occurrence);
            }
            catch (err) {
                return res.status(400).json({
                    errors: err.errors,
                });
            }
            ;
            const newOccurence = yield this.service.createOccurrence(Object.assign(Object.assign({}, occurrence), { timelineId: timelineId }));
            if ('error' in newOccurence) {
                return res.status(newOccurence.status).json(newOccurence);
            }
            ;
            return res.status(201).json(newOccurence);
        });
    }
    ;
    findAllOccurenceByTimeline(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { timelineId } } = req;
            if (!timelineId) {
                return res.status(400).json({
                    message: "id not defined"
                });
            }
            ;
            const result = yield this.service.findAllOccurenceByTimeline(timelineId);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            ;
            return res.status(201).json(result);
        });
    }
    ;
    findOccurenceById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { occurrenceId, timelineId } } = req;
            if (!timelineId && occurrenceId) {
                return res.status(400).json({
                    message: "id not defined"
                });
            }
            ;
            const payload = {
                occurrenceId,
                timelineId,
            };
            const result = yield this.service.findOccurrenceById(payload);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            ;
            return res.status(201).json(result);
        });
    }
    ;
    occurrenceUpadate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { occurrenceId }, body: occurrence } = req;
            if (!occurrenceId) {
                return res.status(400).json({
                    message: "id not defined"
                });
            }
            ;
            try {
                yield (0, createOccurrenceSchema_1.makeCreateOccurenceSchema)().validate(occurrence);
            }
            catch (err) {
                return res.status(400).json({
                    errors: err.errors,
                });
            }
            ;
            const payload = Object.assign(Object.assign({}, occurrence), { occurrenceId });
            const newOccurrenceUpdate = yield this.service.OccurrenceUpdate(payload);
            if ('error' in newOccurrenceUpdate) {
                return res.status(newOccurrenceUpdate.error).json(newOccurrenceUpdate);
            }
            ;
            res.status(201).json(newOccurrenceUpdate);
        });
    }
    ;
}
exports.OccurrenceController = OccurrenceController;
;

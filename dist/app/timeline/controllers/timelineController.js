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
exports.TimelineController = void 0;
const timelineSchema_1 = require("../schemas/timelineSchema");
class TimelineController {
    constructor(service) {
        this.service = service;
    }
    ;
    createTimeline(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body: timeline, params: { patientId } } = req;
            if (!patientId) {
                return res.status(400).json({
                    message: "id not defined",
                });
            }
            ;
            try {
                yield (0, timelineSchema_1.makeCreateTimelineSchema)().validate(timeline);
            }
            catch (err) {
                return res.status(400).json({
                    errors: err.errors,
                });
            }
            ;
            const newTimeline = yield this.service.createTimeline(Object.assign(Object.assign({}, timeline), { patientId: patientId }));
            if ('error' in newTimeline) {
                return res.status(newTimeline.status).json(newTimeline);
            }
            ;
            return res.status(201).json(newTimeline);
        });
    }
    ;
    findTimelineById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { timelineId, patientId } } = req;
            if (!timelineId && patientId) {
                return res.status(400).json({
                    message: "id not defined",
                });
            }
            ;
            const payload = {
                timelineId,
                patientId
            };
            const result = yield this.service.findTimelineById(payload);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            ;
            return res.status(201).json(result);
        });
    }
    ;
    timelineUpadate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params: { timelineId }, body: timeline } = req;
            if (!timelineId) {
                return res.status(400).json({
                    message: "id not defined",
                });
            }
            ;
            try {
                yield (0, timelineSchema_1.makeCreateTimelineSchema)().validate(timeline);
            }
            catch (err) {
                return res.status(400).json({
                    errors: err.errors,
                });
            }
            ;
            const payload = Object.assign(Object.assign({}, timeline), { timelineId });
            const newTimelineUpdate = yield this.service.timelineUpdate(payload);
            if ('error' in newTimelineUpdate) {
                return res.status(newTimelineUpdate.error).json(newTimelineUpdate);
            }
            res.status(201).json(newTimelineUpdate);
        });
    }
}
exports.TimelineController = TimelineController;
;

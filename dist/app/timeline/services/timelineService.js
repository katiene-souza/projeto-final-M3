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
exports.TimelineService = void 0;
class TimelineService {
    constructor(timelineRepository, patientRepository) {
        this.timelineRepository = timelineRepository;
        this.patientRepository = patientRepository;
    }
    ;
    createTimeline(timeline) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTimeline = yield this.timelineRepository.createTimeline(timeline);
                return this.patientRepository.pushTimeline(timeline.patientId, newTimeline.id);
            }
            catch (error) {
                return ({ error: true, message: "internal server error", status: 500 });
            }
            ;
        });
    }
    ;
    findTimelineById(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.timelineRepository.findTimelineById(payload.timelineId);
            }
            catch (error) {
                return { error: true, message: "internal server error", status: 500 };
            }
            ;
        });
    }
    ;
    timelineUpdate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTimelineUpdate = yield this.timelineRepository.timelineUpdate(payload.timelineId, payload);
                return {
                    message: 'patient updated',
                    status: 200,
                    data: newTimelineUpdate,
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
exports.TimelineService = TimelineService;
;

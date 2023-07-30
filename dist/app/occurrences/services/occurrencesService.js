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
exports.OccurenceService = void 0;
class OccurenceService {
    constructor(occurenceRepository, timelineRepository) {
        this.occurenceRepository = occurenceRepository;
        this.timelineRepository = timelineRepository;
    }
    ;
    createOccurrence(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newOccurrence = yield this.occurenceRepository.createOccurrence(payload);
                return this.timelineRepository.pushOccurence(payload.timelineId, newOccurrence.id);
            }
            catch (error) {
                console.log(error);
                return ({ error: true, message: "internal server error", status: 500 });
            }
            ;
        });
    }
    ;
    findAllOccurenceByTimeline(timelineId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.occurenceRepository.findAllOccurenceByTimeline(timelineId);
            }
            catch (error) {
                return { error: true, message: "internal server error", status: 500 };
            }
            ;
        });
    }
    ;
    findOccurrenceById(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.occurenceRepository.findOccurrenceById(payload.occurrenceId);
            }
            catch (error) {
                return { error: true, message: "internal server error", status: 500 };
            }
            ;
        });
    }
    ;
    OccurrenceUpdate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newOccurrenceUpdate = yield this.occurenceRepository.OccurrenceUpdate(payload.occurrenceId, payload);
                return {
                    message: 'occurrence updated',
                    status: 200,
                    data: newOccurrenceUpdate,
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
exports.OccurenceService = OccurenceService;
;

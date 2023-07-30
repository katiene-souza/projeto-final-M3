"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.occurenceModule = void 0;
const timelineModule_1 = require("../timeline/timelineModule");
const occurrence_1 = require("./entities/occurrence");
const occurrenceController_1 = require("./controllers/occurrenceController");
const occurrenceRepository_1 = require("./repositories/occurrenceRepository");
const occurrencesService_1 = require("./services/occurrencesService");
class occurenceModule {
    static build() {
        const occurenceRepository = new occurrenceRepository_1.OccurenceRepository(occurrence_1.Occurrence);
        const occurrenceService = new occurrencesService_1.OccurenceService(occurenceRepository, timelineModule_1.TimelineModule.build().timelineRepository);
        const occurrenceController = new occurrenceController_1.OccurrenceController(occurrenceService);
        return { occurenceRepository, occurrenceService, occurrenceController };
    }
    ;
}
exports.occurenceModule = occurenceModule;
;

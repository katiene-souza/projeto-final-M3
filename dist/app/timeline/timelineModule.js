"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineModule = void 0;
const patientModule_1 = require("../patients/patientModule");
const timelineController_1 = require("./controllers/timelineController");
const timeline_1 = require("./entities/timeline");
const timelineRepository_1 = require("./repositories/timelineRepository");
const timelineService_1 = require("./services/timelineService");
class TimelineModule {
    static build() {
        const timelineRepository = new timelineRepository_1.TimelineRepository(timeline_1.Timeline);
        const timelineService = new timelineService_1.TimelineService(timelineRepository, patientModule_1.PatientModule.build().patientRepository);
        const timelineControler = new timelineController_1.TimelineController(timelineService);
        return { timelineRepository, timelineService, timelineControler };
    }
    ;
}
exports.TimelineModule = TimelineModule;
;

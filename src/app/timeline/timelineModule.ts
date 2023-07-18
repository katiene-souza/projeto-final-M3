import { PatientModule } from "../patients/patientModule";

import { TimelineController } from "./controllers/timelineController";
import { Timeline } from "./entities/timeline";
import { TimelineRepository } from "./repositories/timelineRepository";
import { TimelineService } from "./services/timelineService";


export class TimelineModule {
    static build() {
        const timelineRepository = new TimelineRepository(Timeline);
        const timelineService = new TimelineService(timelineRepository, PatientModule.build().patientRepository);
        const timelineControler = new TimelineController(timelineService);

        return { timelineRepository, timelineService, timelineControler }
    };
};
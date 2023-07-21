import { TimelineModule } from "../timeline/timelineModule";
import { Occurrence } from "./entities/occurrence";

import { OccurrenceController } from "./controllers/occurrenceController";
import { OccurenceRepository } from "./repositories/occurrenceRepository";
import { OccurenceService } from "./services/occurrencesService";

export class occurenceModule {
    static build() {
        const occurenceRepository = new OccurenceRepository(Occurrence);
        const occurrenceService = new OccurenceService(occurenceRepository, TimelineModule.build().timelineRepository);
        const occurrenceController = new OccurrenceController(occurrenceService);

        return { occurenceRepository, occurrenceService, occurrenceController };
    };
};
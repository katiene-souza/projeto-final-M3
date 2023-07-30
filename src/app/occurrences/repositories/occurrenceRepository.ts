import { CreateOccurenceDTO } from "../dtos/createOccurrenceDto";
import { Occurrence } from "../entities/occurrence";

export class OccurenceRepository {
    constructor(private model: typeof Occurrence ) {};

    async createOccurrence(payload: CreateOccurenceDTO) {
        return this.model.create(payload);
    };

    async findAllOccurenceByTimeline(timelineId: string) {
        return this.model.find({ timelines:timelineId });
    };

    async findOccurrenceById(occurrenceId: string) {
        return this.model.findById(occurrenceId);
    };

    async OccurrenceUpdate(occurrenceId: string, occurrenceUpdate: CreateOccurenceDTO) {
        return this.model.findByIdAndUpdate(
            { _id: occurrenceId },
            occurrenceUpdate,
            { new: true });
    };
};
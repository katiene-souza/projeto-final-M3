import { CreateTimelineDTO } from "../dtos/createTimelineDto";
import { Timeline } from "../entities/timeline";

export class TimelineRepository {
    constructor(private model: typeof Timeline) { };

    async createTimeline(timeline: CreateTimelineDTO) {
        return this.model.create(timeline);
    };

    async findTimelineById(timelineId: string) {
        return this.model.findById(timelineId);
    };

    async timelineUpdate(timelineId: string, timelineUpdate: CreateTimelineDTO) {
        return this.model.findByIdAndUpdate(
            { _id: timelineId },
            timelineUpdate,
            { new: true });
    };
};
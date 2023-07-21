import { PatientRepository } from "../../patients/repositories/patientRepository";
import { CreateTimelineDTO, CreateTimelineIdDTO } from "../dtos/createTimelineDto";
import { TimelineRepository } from "../repositories/timelineRepository";

export class TimelineService {
    constructor(
        private timelineRepository: TimelineRepository,
        private patientRepository: PatientRepository
    ) { };

    async createTimeline(timeline: CreateTimelineDTO) {
        try {
            const newTimeline = await this.timelineRepository.createTimeline(timeline);

            return this.patientRepository.pushTimeline(timeline.patientId as string, newTimeline.id);
        } catch (error) {
            return ({ error: true, message: "internal server error", status: 500 });
        };
    };

    async findTimelineById(payload: CreateTimelineIdDTO) {
        try {
            return this.timelineRepository.findTimelineById(payload.timelineId);
        } catch (error) {
            return { error: true, message: "internal server error", status: 500 };
        };
    };

    async timelineUpdate(payload: CreateTimelineDTO) {
        try {
            const newTimelineUpdate = await this.timelineRepository.timelineUpdate(payload.timelineId, payload);

            return {
                message: 'patient updated',
                status: 200,
                data: newTimelineUpdate,
            };
            
        } catch (error) {
            return { error: true, message: "internal server error", status: 500 };
        };
    };
};

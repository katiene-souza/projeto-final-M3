import { TimelineRepository } from "../../timeline/repositories/timelineRepository";
import { CreateOccurenceDTO, CreateOccurenceServiceDTO } from "../dtos/createOccurrenceDto";
import { OccurenceRepository } from "../repositories/occurrenceRepository";

export class OccurenceService {
    constructor( 
        private occurenceRepository: OccurenceRepository,
        private timelineRepository: TimelineRepository,
        ) {};

    async createOccurrence(payload: CreateOccurenceDTO) {
        try{
         const newOccurrence = await this.occurenceRepository.createOccurrence(payload);

           return this.timelineRepository.pushOccurence(payload.timelineId as string, newOccurrence.id);

           
        } catch(error) {
            console.log(error)
            return({ error: true, message: "internal server error", status: 500 });
        };
    };

    async findAllOccurenceByTimeline(timelineId: string) {
        try {
            return this.occurenceRepository.findAllOccurenceByTimeline(timelineId);
        } catch (error) {
            return { error: true, message: "internal server error", status: 500 };
        };
    };
    
    async findOccurrenceById(payload: CreateOccurenceServiceDTO) {
        try {
            return this.occurenceRepository.findOccurrenceById(payload.occurrenceId);
        } catch(error) {
            return { error: true, message: "internal server error", status: 500 };
        };
    };

    async OccurrenceUpdate(payload: CreateOccurenceDTO) {
        try {
            const newOccurrenceUpdate = await this.occurenceRepository.OccurrenceUpdate(payload.occurrenceId, payload);

            return {
                message: 'occurrence updated',
                status: 200,
                data: newOccurrenceUpdate,
            };
        } catch(error) {
            return { error: true, message: "internal server error", status: 500 };
        };
    };
}; 
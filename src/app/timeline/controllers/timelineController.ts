import { Request, Response } from "express";
import { TimelineService } from "../services/timelineService";
import { makeCreateTimelineSchema } from "../schemas/timelineSchema";

export class TimelineController {
    constructor( private service: TimelineService) {};
    
    async createTimeline(req: Request, res: Response) {
        const {body: timeline, params: { patientId } } = req;
        
        try {
            await makeCreateTimelineSchema().validate(timeline);
        } catch(err: any) {
            return res.status(400).json({
                errors: err.errors,
            });
        };

        const newTimeline = await this.service.createTimeline({ ...timeline, patientId: patientId }) as any;
        
        if('error' in newTimeline ) {
            return res.status(newTimeline.status).json(newTimeline);
        };
        
        return res.status(201).json(newTimeline);
    };


    async findTimelineById(req: Request, res: Response) {
        const { params: { timelineId, patientId } } = req;

        const  payload = {
            timelineId, 
            patientId
        }

        const result = await this.service.findTimelineById(payload) as any;
        if('error' in result ) {
            return res.status(result.status).json(result);
        };

        return res.status(201).json(result);
    };

    async timelineUpadate(req: Request, res: Response) {
        const { params: { timelineId }, body: timeline } = req;

        try {
            await makeCreateTimelineSchema().validate(timeline);

        } catch (err: any) {
            return res.status(400).json({
                errors: err.errors,
            });
        };

       const  payload = {
            ...timeline, 
            timelineId
        }

        const newTimelineUpdate = await this.service.timelineUpdate(payload) as any;
        if('error' in newTimelineUpdate) {
            return res.status(newTimelineUpdate.error).json(newTimelineUpdate) 
        }

        res.status(201).json(newTimelineUpdate);
    }
};
import { Request, Response } from "express";
import { OccurenceService } from "../services/occurrencesService";
import { makeCreateOccurenceSchema } from "../schemas/createOccurrenceSchema";

export class OccurrenceController {
    constructor(private service: OccurenceService) { };

    async createOccurrence(req: Request, res: Response) {
        const { body: occurrence, params: { timelineId } } = req

        if (!timelineId) {
            return res.status(400).json({
                message: "id not defined"
            });
        };

        try {
            await makeCreateOccurenceSchema().validate(occurrence);

        } catch (err: any) {
            return res.status(400).json({
                errors: err.errors,
            });
        };

        const newOccurence = await this.service.createOccurrence({ ...occurrence, timelineId: timelineId }) as any;

        if ('error' in newOccurence) {
            return res.status(newOccurence.status).json(newOccurence);
        };

        return res.status(201).json(newOccurence);
    };


    async findAllOccurenceByTimeline(req: Request, res: Response) {
        const { params: { timelineId } } = req;

        if (!timelineId) {
            return res.status(400).json({
                message: "id not defined"
            });
        };

        const result = await this.service.findAllOccurenceByTimeline(timelineId) as any;
        if ('error' in result) {
            return res.status(result.status).json(result);
        };

        return res.status(201).json(result);
    };


    async findOccurenceById(req: Request, res: Response) {
        const { params: { occurrenceId, timelineId } } = req;

        if (!timelineId && occurrenceId) {
            return res.status(400).json({
                message: "id not defined"
            });
        };

        const payload = {
            occurrenceId,
            timelineId,
        };

        const result = await this.service.findOccurrenceById(payload) as any;
        if ('error' in result) {
            return res.status(result.status).json(result);
        };

        return res.status(201).json(result);
    };

    async occurrenceUpadate(req: Request, res: Response) {
        const { params: { occurrenceId }, body: occurrence } = req;

        if (!occurrenceId) {
            return res.status(400).json({
                message: "id not defined"
            });
        };

        try {
            await makeCreateOccurenceSchema().validate(occurrence);

        } catch (err: any) {
            return res.status(400).json({
                errors: err.errors,
            });
        };

        const payload = {
            ...occurrence,
            occurrenceId
        };

        const newOccurrenceUpdate = await this.service.OccurrenceUpdate(payload) as any;
        if ('error' in newOccurrenceUpdate) {
            return res.status(newOccurrenceUpdate.error).json(newOccurrenceUpdate);
        };

        res.status(201).json(newOccurrenceUpdate);
    };
};
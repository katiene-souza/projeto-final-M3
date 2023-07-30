import { OccurenceService } from "./occurrencesService";

const repositoryOccurrence = { createOccurrence: jest.fn() } as any;
const repositoryTimeline = { pushOccurence: jest.fn() } as any;
const service = new OccurenceService(repositoryOccurrence, repositoryTimeline);

describe("test occurrence", () => {
    it("should create a occurrence", async () => { 
        const mock = {
            name: "testing",
            content: "testing",
            kind: "testing",
            timelineId: "34541211",
            occurrenceId: "1123344",

        };

        jest.spyOn(repositoryOccurrence, "createOccurrence").mockResolvedValue(mock as any);
        jest.spyOn(repositoryTimeline, "pushOccurence").mockResolvedValue({timelineId: mock.timelineId, occurrenceId: mock.occurrenceId}); 

        const response = await service.createOccurrence(mock);

        const expectedResponse = {
            message: "Occurrence created",
            statusCode: 201,
            data: mock,
        };

        expect(response).toEqual(expectedResponse);
    });
}); 
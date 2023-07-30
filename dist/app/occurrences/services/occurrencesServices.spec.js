"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const occurrencesService_1 = require("./occurrencesService");
const repositoryOccurrence = { createOccurrence: jest.fn() };
const repositoryTimeline = { pushOccurence: jest.fn() };
const service = new occurrencesService_1.OccurenceService(repositoryOccurrence, repositoryTimeline);
describe("test occurrence", () => {
    it("should create a occurrence", () => __awaiter(void 0, void 0, void 0, function* () {
        const mock = {
            name: "testing",
            content: "testing",
            kind: "testing",
            timelineId: "34541211",
            occurrenceId: "1123344",
        };
        jest.spyOn(repositoryOccurrence, "createOccurrence").mockResolvedValue(mock);
        jest.spyOn(repositoryTimeline, "pushOccurence").mockResolvedValue({ timelineId: mock.timelineId, occurrenceId: mock.occurrenceId });
        const response = yield service.createOccurrence(mock);
        const expectedResponse = {
            message: "Occurrence created",
            statusCode: 201,
            data: mock,
        };
        expect(response).toEqual(expectedResponse);
    }));
});

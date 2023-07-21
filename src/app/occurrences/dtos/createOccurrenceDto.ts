export interface CreateOccurenceDTO {
    name: string;
    content: string;
    kind: string;
    timelineId?: string;
    occurrenceId: string;
  };

export interface CreateOccurenceServiceDTO {
    timelineId: string;
    occurrenceId: string;
  }; 
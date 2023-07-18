export interface CreateTimelineDTO {
    name: string;
    patientId?: string;
    timelineId: string
  };

  export interface CreateTimelineIdDTO {
    timelineId: string;
    patientId: string;
  };

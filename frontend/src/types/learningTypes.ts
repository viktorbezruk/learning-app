export enum ModuleStatuses {
  COMPLETED = "completed",
  INCOMPLETE = "incomplete",
  LOCKED = "locked",
  PENDING = "pending",
}

export enum EventStatuses {
  ATTENDED = "attended",
  ATTENDING = "attending",
  INVITED = "invited",
  DECLINED = "declined",
}

export enum ModuleType {
  QUIZ = "quiz",
  SURVEY = "survey",
  LESSON = "lesson",
}

export type LearningModel =
  | {
      type: "module";
      data: ModuleData;
      context: ContextData<ModuleStatuses>;
    }
  | {
      type: "event";
      data: EventData;
      context: ContextData<EventStatuses>;
    };

export interface ModuleData {
  id: number;
  name: string;
  description: string | null;
  imagePath: string | null;
  moduleType: ModuleType;
  duration: number;
  createdAt: string;
  updatedAt: string;
}

export interface EventData {
  id: number;
  name: string;
  description: string | null;
  imagePath: string | null;
  location: string;
  startDate: string;
  endDate: string;
  signupDeadline: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ContextData<T> {
  status: T;
  complete: boolean;
  completedAt: string | null;
}

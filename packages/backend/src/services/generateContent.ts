import { generateModuleData } from "./generateModule";
import { generateEventData } from "./generateEvent";
import { LearningModel } from "../types/learningTypes";

export const generateLearningContent = (
  moduleCount: number,
  eventCount: number
): LearningModel[] => {
  const modules: LearningModel[] = Array.from({ length: moduleCount }, () =>
    generateModuleData()
  );
  const events: LearningModel[] = Array.from({ length: eventCount }, () =>
    generateEventData()
  );

  const combined = [...modules, ...events];
  return shuffleArray(combined);
};

function shuffleArray(array: LearningModel[]): LearningModel[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

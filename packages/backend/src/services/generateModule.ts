import { faker } from "@faker-js/faker";
import { ModuleData, ContextData, LearningModel } from "../types/learningTypes";
import { ModuleStatuses, ModuleType } from "../types/learningTypes";

export const generateModuleData = (): LearningModel => {
  const moduleData: ModuleData = {
    id: faker.number.int(),
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    imagePath: faker.image.url({
      width: 300,
      height: 200,
    }),
    moduleType: faker.helpers.arrayElement(Object.values(ModuleType)),
    duration: faker.number.int({ min: 300, max: 3600 }),
    createdAt: faker.date.past({ years: 1 }).toISOString(),
    updatedAt: faker.date.past({ years: 1 }).toISOString(),
  };

  const context: ContextData<ModuleStatuses> = {
    status: faker.helpers.arrayElement(Object.values(ModuleStatuses)),
    complete: faker.datatype.boolean(),
    completedAt: faker.datatype.boolean()
      ? faker.date.past({ years: 1 }).toISOString()
      : null,
  };

  return {
    type: "module",
    data: moduleData,
    context,
  };
};

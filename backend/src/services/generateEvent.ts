import { faker } from "@faker-js/faker";
import { EventData, ContextData, LearningModel } from "../types/learningTypes";
import { EventStatuses } from "../types/learningTypes";

export const generateEventData = (): LearningModel => {
  const eventData: EventData = {
    id: faker.number.int(),
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    imagePath: faker.image.url({
      width: 300,
      height: 200,
    }),
    location: faker.location.city(),
    startDate: faker.date.future({ years: 1 }).toISOString(),
    endDate: faker.date.future({ years: 1 }).toISOString(),
    signupDeadline: faker.datatype.boolean()
      ? faker.date.future({ years: 1 }).toISOString()
      : null,
    createdAt: faker.date.past({ years: 1 }).toISOString(),
    updatedAt: faker.date.past({ years: 1 }).toISOString(),
  };

  const context: ContextData<EventStatuses> = {
    status: faker.helpers.arrayElement(Object.values(EventStatuses)),
    complete: faker.datatype.boolean(),
    completedAt: faker.datatype.boolean()
      ? faker.date.past({ years: 1 }).toISOString()
      : null,
  };

  return {
    type: "event",
    data: eventData,
    context,
  };
};

import { faker } from "@faker-js/faker";
import { IStory } from ".";

export default function generateFakeStories(): IStory[] {
  const length = Math.floor(Math.random() * 20) + 10;

  return Array.from({ length }, (_, index) => {
    return {
      id: faker.string.uuid(),
      user: {
        name: faker.internet.userName().toLowerCase(),
        avatar: faker.image.avatar(),
      },
    };
  });
}

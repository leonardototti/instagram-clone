import { faker } from "@faker-js/faker";
import { IUserData } from ".";

export default function generateFakeUserData(): IUserData {
  const name = faker.person.firstName();

  return {
    user: {
      name: name,
      username: faker.internet.userName({ firstName: name }).toLowerCase(),
      avatar: faker.image.avatar(),
    },
    suggestions: Array.from({ length: 5 }, (_, index) => {
      return {
        id: faker.string.uuid(),
        username: faker.internet.userName().toLowerCase(),
        avatar: faker.image.avatar(),
        followsYou: faker.datatype.boolean({ probability: 0.6 }),
      };
    }),
  };
}

import { faker } from "@faker-js/faker";
import { IPost } from ".";

const formatter = new Intl.NumberFormat("pt-BR", {
  notation: "standard",
  maximumFractionDigits: 1,
});

export default function generateFakePosts(): IPost[] {
  const length = Math.floor(Math.random() * 15) + 4;

  return Array.from({ length }, (_, index) => {
    return {
      id: faker.string.uuid(),
      user: {
        username: faker.internet.userName().toLowerCase(),
        avatar: faker.image.avatar(),
      },
      image: faker.image.urlLoremFlickr({
        width: 614,
        height: 614,
        category: "cats",
      }),
      likes: {
        featured: {
          username: faker.internet.userName().toLowerCase(),
          avatar: faker.image.avatar(),
        },
        count: formatter.format(
          Math.floor(Math.random() * (50000 - 15 + 1) + 15)
        ),
      },
    };
  });
}

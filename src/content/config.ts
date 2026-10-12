import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      date: z.string().transform((str) => new Date(str)),
      description: z.string().optional(),
      cover: image().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};

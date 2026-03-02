import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
});

const professional = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/professional" }),
  schema: blogSchema,
});

const personal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/personal" }),
  schema: blogSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    github: z.string().url(),
    live: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { professional, personal, projects };

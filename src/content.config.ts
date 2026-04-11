import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const process = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/process' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    stage: z.string(),
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    draft: z.boolean().default(true),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    audience: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  process,
  news,
  caseStudies,
};

import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    pillar: z.enum(['venue-guide', 'decision-support', 'seasonal', 'process-trust']),
    heroAlt: z.string(),
  }),
});

export const collections = { journal };

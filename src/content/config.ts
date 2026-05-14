import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    type: z.string(),
    role: z.string(),
    date: z.union([z.string(), z.number()]).transform(String).optional(),
    status: z.string(),
    tools: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    template: z.enum(['game', 'script', 'ai-tool', 'analysis', 'resume', 'default']).default('default'),
    order: z.number().optional()
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string(),
    cover: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { works, blog };

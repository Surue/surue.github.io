import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    languages: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    role: z.string().optional(),
    type: z.enum(['pro', 'school', 'jam', 'perso']).optional(),
    last_update: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    languages: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    github: z.string().optional(),
    github_repo: z.string().optional(),
    gitlab: z.string().optional(),
    steam: z.string().optional(),
    company: z.string().optional(),
    jam_name: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const languages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
  projects,
  languages,
};
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
			featured: z.boolean().optional(),
		}),
});

const site = defineCollection({
	loader: glob({ base: './src/content/site', pattern: '**/*.{md,mdx,yml,yaml}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		hero: z.object({
			title: z.string(),
			subtitle: z.string(),
		}).optional(),
		author: z.object({
			name: z.string(),
			bio: z.string().optional(),
			avatar: z.string().optional(),
		}).optional(),
	}),
});

export const collections = { blog, site };

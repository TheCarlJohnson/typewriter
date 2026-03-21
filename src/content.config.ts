import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

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
	loader: file('src/config.yml'),
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
			socials: z.array(z.object({
				id: z.string(),
				label: z.string(),
				href: z.string(),
			})).optional(),
		}).optional(),
	}),
});

export const collections = { blog, site };

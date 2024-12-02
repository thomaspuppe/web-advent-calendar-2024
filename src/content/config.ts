import { defineCollection, z } from 'astro:content';

const calendar = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		category: z.string(),
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		published: z.boolean().optional()
	}),
});

export const collections = { calendar };

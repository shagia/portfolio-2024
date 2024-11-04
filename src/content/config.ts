// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const portfolioPostCollection = defineCollection({ 
	type: 'content',
	schema: ({image}) => z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		tech: z.array(z.string()),
		images: z.array(image()),
		date: z.date(),
		dateRange: z.string(),
		dateRangeNew: z.array(z.string()),
		present: z.boolean(),
	})
});
const wikiPostCollection = defineCollection({ 
	type: 'content',
	schema: ({image}) => z.object({
		title: z.string(),
		subtitle: z.string(),
		asciiLogo: image(),
		specs: z.array(z.string()),
		description: z.string(),
		images: z.array(image()),
	})
});
const blogPostCollection = defineCollection({ 
	type: 'content',
	schema: ({image}) => z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		images: z.array(image()),
		featuredImage: image(),
		tags: z.array(z.string())
	})
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'wiki': wikiPostCollection,
  'portfolio': portfolioPostCollection,
  'blog': blogPostCollection
};
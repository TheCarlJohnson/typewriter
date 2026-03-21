import { getEntry } from 'astro:content';
export async function getSite() {
	const entry = await getEntry('site', 'config');
	return {
		title: entry?.data.title,
		description: entry?.data.description,
		hero: entry?.data.hero,
		author: entry?.data.author,
	};
}

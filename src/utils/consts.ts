import { getEntry } from 'astro:content';
export async function getSite() {
	const siteEntry = await getEntry('site', 'site');
	const authorEntry = await getEntry('site', 'author');
	return {
		title: siteEntry?.data.title,
		description: siteEntry?.data.description,
		hero: siteEntry?.data.hero,
		author: authorEntry?.data,
	};
}

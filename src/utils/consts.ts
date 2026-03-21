import { getEntry } from 'astro:content';
export async function getSite() {
	const siteEntry = await getEntry('site', 'site');
	const authorEntry = await getEntry('site', 'author');
	const siteData = siteEntry?.data?.site ?? siteEntry?.data;
	const authorData = authorEntry?.data?.author ?? authorEntry?.data;
	return {
		title: siteData?.title,
		description: siteData?.description,
		hero: siteData?.hero,
		author: authorData,
	};
}

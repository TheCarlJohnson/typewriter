import { getEntry } from 'astro:content';
export async function getSite() {
	try {
		const siteEntry = await getEntry('site', 'site');
		const authorEntry = await getEntry('site', 'author');
		return {
			title: siteEntry?.data?.title ?? 'Almost a Footnote',
			description: siteEntry?.data?.description ?? '',
			hero: siteEntry?.data?.hero ?? null,
			author: authorEntry?.data ?? null,
		};
	} catch {
		return {
			title: 'Almost a Footnote',
			description: 'Legal reasoning, personal reflection, and the occasional science-backed detour.',
			hero: null,
			author: null,
		};
	}
}

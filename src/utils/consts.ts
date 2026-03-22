import { getEntry } from 'astro:content';
export async function getSite() {
	try {
		const entry = await getEntry('site', 'index');
		return {
			title: entry?.data?.title ?? 'Almost a Footnote',
			description: entry?.data?.description ?? '',
			hero: entry?.data?.hero ?? null,
			author: entry?.data?.author ?? null,
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

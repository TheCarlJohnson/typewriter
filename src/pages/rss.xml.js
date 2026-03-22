import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET() {
	const posts = await getCollection('blog');
	const sorted = posts.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
	return rss({
		title: 'Almost a Footnote',
		description: 'Legal reasoning, personal reflection, and the occasional science-backed detour.',
		site: 'https://almostafootnote.pages.dev',
		items: sorted.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
	});
}

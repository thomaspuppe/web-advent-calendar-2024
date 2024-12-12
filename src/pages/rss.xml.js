import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('calendar')).
		filter((post) => post.data.published ).
		sort((a, b) => b.data.slug - a.data.slug);
		
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.slug}/`,
		})),
	});
}

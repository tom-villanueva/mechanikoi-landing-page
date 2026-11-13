import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SHOW_BLOG } from "../config";

// Add new pages here. English lives at the root, Spanish under /es/; hreflang is in the page heads.
const pages = ["/", "/iris-dissolution/", "/bleeding-roots/"].flatMap((p) => [p, `/es${p}`]);

export const GET: APIRoute = async ({ site }) => {
	const urls = [...pages];
	// Blog is built but hidden from the nav; list it only once it's live
	if (SHOW_BLOG) {
		const posts = await getCollection("blog");
		urls.push("/en/blog/", "/es/blog/", ...posts.map((post) => {
			const [lang, name] = post.slug.split("/");
			return `/${lang}/blog/${name}/`;
		}));
	}
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${new URL(u, site).href}</loc></url>`).join("\n")}
</urlset>
`;
	return new Response(body, { headers: { "Content-Type": "application/xml" } });
};

import { POSTS } from "@/lib/constants";


export const baseUrl = "https://next-blog-cj.vercel.app";

export default async function sitemap() {
  

  let routes = POSTS.map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [ ...routes];
}

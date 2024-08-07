import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import glob from "tiny-glob";

export const BLOG_PATH = path.join(process.cwd(), "/blog/posts/");

function getSlug(slugPath: string) {
  const [slug] = /.+(?=.mdx)/i.exec(path.basename(slugPath)) as string[];
  return slug;
}

export async function findAllPostSlugs() {
  return glob(path.join(BLOG_PATH, "*.mdx")).then((paths) =>
    paths.map(getSlug),
  );
}

export function getPath(slug: string) {
  return path.join(BLOG_PATH, `${slug}.mdx`);
}

export async function loadMdxFromSlug(slug: string) {
  const path = getPath(slug);
  const source = await fs.readFile(path);
  return matter(source);
}

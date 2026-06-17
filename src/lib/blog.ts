import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogFrontmatter = {
  title: string;
  slug: string;
  metaDescription: string;
  author: string;
  date: string;
  category: string;
  sources: string[];
  faqs: { question: string; answer: string }[];
};

export type BlogPost = {
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
};

export function getAllBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    );
}

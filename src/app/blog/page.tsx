import type { Metadata } from "next";
import { redirect } from "next/navigation";

import PaginatedPosts from "@/app/blog/paginatedPosts";
import { getAllPosts } from "@/lib/blog";
import blogMetadata from "@/metadata/blog";

export const metadata: Metadata = blogMetadata;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page: string | undefined };
}) {
  const posts = await getAllPosts();

  const parsedPage = Number.parseInt(searchParams.page ?? "");

  // never show ?page=0
  if (parsedPage === 0) {
    redirect("/blog");
  }

  const page = Number.isNaN(parsedPage) ? 0 : parsedPage;

  // redirect if manually navigating to a page that doesn't exist
  if (page > Math.ceil(posts.length / 3) - 1) {
    redirect("/blog");
  }

  return (
    <div className="bg-secondary">
      <div className="mt-8 flex flex-row justify-center">
        <h1>BLOG</h1>
      </div>

      <div className="mt-5 flex justify-center">
        <h2>stuff i wanted to write about.</h2>
      </div>

      <hr className="my-6" />

      <PaginatedPosts posts={posts} page={page} />
    </div>
  );
}

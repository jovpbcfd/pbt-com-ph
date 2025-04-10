import Link from "next/link";
// import Image from "next/image";
import { getBlogBySlug } from "@/lib/get-blog";
import { client } from "@/lib/sanity-client";
import BlogBody from "../_components/blog-body";
import TableOfContent from "../_components/table-content";
import BlogOtherList from "../_components/blog-other-list";
import { SquareArrowOutUpRight } from "lucide-react";

export async function generateStaticParams() {
  const query = "*[_type == $type]{ slug }";
  const params = { type: "post-mnwlwin" };

  const posts = await client.fetch(query, params);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return posts.map((post: { slug: any }) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);
  const currentPost = blog?.data?.currentPost ?? {};

  return {
    title: currentPost.title || "Blog",
    description: currentPost.description || "",
    robots: {
      index: false, // noindex
      follow: false, // nofollow
    },
    openGraph: {
      title: currentPost.title || "Blog",
      description: currentPost.description || "",
      url: `${process.env.APP_DOMAIN}/blogs/${slug}`,
      images: currentPost.mainImage.asset.url,
    },
    twitter: {
      card: "summary_large_image",
      title: currentPost.title || "Blog",
      description: currentPost.description || "",
      images: currentPost.mainImage.asset.url,
    },
    alternates: {
      cannonical: `${process.env.APP_DOMAIN}/blogs/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  const { currentPost, otherBlogs } = blog?.data;

  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="max-w-[86.25rem] mx-auto grid place-content-center grid-rows-[auto_1fr_auto] md:grid-rows-1 md:grid-cols-[auto_50rem_auto]">
        <aside className="h-auto hidden md:sticky md:top-[96px] md:h-[calc(100vh-30px)] lg:block">
          <div className="text-gray-1000 mb-1 mt-[7px] text-xl font-medium">
            On this page
          </div>
          <div className="flex flex-col gap-8">
            <nav className="relative after:content-[''] after:block after:absolute after:bg-stone-300 after:bottom-[-20px] after:h-[1px] after:w-full">
              <TableOfContent currentPost={currentPost} />
            </nav>
            <div>
              <div className="flex items-center gap-2 mt-2">
                <Link href="#" className="text-white/50 text-md hover:white">
                  Register now on Panalobet
                </Link>
                <SquareArrowOutUpRight className="text-white/50" size={16} />
              </div>
            </div>
          </div>
        </aside>
        <article className="mx-auto flex flex-col gap-10 text-black md:max-w-[44rem] md:mx-10">
          <BlogBody data={currentPost} />
        </article>
        <aside className="h-auto hidden md:sticky md:top-[96px] md:h-[calc(100vh-30px)] lg:block">
          <div className="flex flex-col items-center gap-6 rounded-md shadow-xs">
            <BlogOtherList otherPost={otherBlogs} />
          </div>
        </aside>
      </div>
    </section>
  );
}

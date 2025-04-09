import { client } from "@/lib/sanity-client";
import type { Post } from "./_components/blog-list";
import BlogList from "./_components/blog-list";
import Link from "next/link";
import Pagination from "./_components/pagination";

const POSTS_QUERY = `*[_type == "post-mega"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{
     name, 
     image {
      asset->{
        url
      }
    }
    },
  publishedAt,
  description,
  mainImage {
     alt,
    asset->{
      url
     
    }
  }
}`;

export const revalidate = 5;
// export const dynamic = "force-dynamic";
const POSTS_PER_PAGE = 6;

// const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Page({
  searchParams,
}: {
  searchParams?: Record<string, string>;
}) {
  // const posts = await client.fetch(POSTS_QUERY);
  const params = await searchParams;
  const currentPage = parseInt(params?.page || "1", 10);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = await client.fetch<Post[]>(
    `*[_type == "post-mega"] | order(publishedAt desc) [${start}...${start + POSTS_PER_PAGE}] {
      _id,
      title,
      slug,
      author->{
        name, 
        image {
          asset->{
            url
          }
        }
      },
      publishedAt,
      description,
      mainImage {
        alt,
        asset->{
          url
        }
      }
    }`
  );

  const totalPosts = await client.fetch<number>(
    'count(*[_type == "post-mega"])'
  );

  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <ul className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:my-8 lg:gap-8 lg:grid-cols-3">
        {posts.length === 0 ? (
          <li>No blog post available</li>
        ) : (
          <>
            {posts.map((post: Post, index: number) => {
              return (
                <li key={index}>
                  <BlogList post={post} key={index} />
                </li>
              );
            })}
          </>
        )}
      </ul>

      <Pagination totalPosts={totalPosts} postsPerPage={POSTS_PER_PAGE} />
    </section>
  );
}

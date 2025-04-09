import { urlFor } from "@/lib/sanity-client";
import { getFormattedDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export type Post = {
  _id: string;
  title: string;
  publishedAt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage: any;
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  slug: {
    current: string;
  };
  description: string;
};

export default function BlogList({ post }: { post: Post }) {
  return (
    <Link
      key={post._id}
      href={`/blogs/${post.slug.current}`}
      className="block group"
    >
      <div className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(post?.mainImage).width(827).height(435).url()}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-[900] text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-3">
            {post.description}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Image
              src={urlFor(post.author.image.asset.url)
                .width(32)
                .height(32)
                .url()}
              width={32}
              height={32}
              alt={post.author.name}
              className="rounded-full"
            />
            <div className="text-sm text-gray-500">
              <p>{post.author.name}</p>
              <p className="text-xs">{getFormattedDate(post.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

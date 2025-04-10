import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity-client";
import { getFormattedDate } from "@/lib/utils";

const customComponents: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => <h2 id={value._key}>{children}</h2>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return <p>Image not found</p>; // Fallback if no image asset is available
      }

      const imageUrl = urlFor(value?.asset)?.width(705).url();

      return (
        <div className="blog-image relative mb-4 w-full h-[200px] md:w-[705px] md:h-[405px]">
          <Image
            src={imageUrl}
            alt={value?.alt || "Image"}
            title={value?.title || "Image"}
            quality={75}
            layout="fill"
            priority
            className="absolute object-cover object-center rounded-xl"
          />
        </div>
      );
    },

    button: ({ value }) => (
      <div className="w-full flex items-center">
        <button
          className="mx-auto bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] py-4 px-8 text-white rounded-xl font-bold mb-3
                transition-transform transform hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300
                "
        >
          <a href={value?.url} target="_blank" rel="noopener noreferrer">
            {value?.text}
          </a>
        </button>
      </div>
    ),
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogBody({ data }: { data: any }) {
  if (!data) return;

  return (
    <>
      <header className="mt-4">
        <h1 className="font-bold text-xl text-white md:text-4xl md:mb-4">
          {data.title}
        </h1>
        <div className="flex items-center gap-4 mt-8">
          <figure className="relative w-[50px] h-[50px]">
            <Image
              src={data.author.image.asset.url}
              alt={data.author.name}
              title={data.author.name}
              width={50}
              height={50} // Specify the height (aspect ratio)
              quality={75}
              priority
              className="absolute w-[50px] h-[50px] rounded-full"
            />
          </figure>
          <div>
            <p className="font-bold text-md text-white">{data.author.name}</p>
            <p className="text-white text-sm">
              {getFormattedDate(data.publishedAt)}
              <span> - </span>
              <span>2 min read</span>
            </p>
          </div>
        </div>
      </header>
      <div className="blog-content text-white text-justify">
        <PortableText value={data?.body} components={customComponents} />
      </div>
    </>
  );
}

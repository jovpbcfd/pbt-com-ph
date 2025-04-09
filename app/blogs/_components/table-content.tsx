"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Children = {
  _type: string;
  text: string;
  _key: string;
};

type Subheading = {
  id: string;
  text: string;
  key: string;
};

export default function TableOfContent({
  currentPost,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentPost: any;
}) {
  const [activeSubHeading, setActiveSubHeading] = useState<null | string>(null);

  const subHeading: Subheading[] = currentPost?.body
    .filter(
      ({ _type, style }: { _type: string; style: string }) =>
        _type === "block" && style === "h2"
    )
    .map(({ _key, children }: { _key: string; children: Children[] }) => ({
      id: _key,
      text: children.map(({ text }) => text).join(""),
      key: _key,
    }));

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      // if (isManualScroll.current) return;
      let isHeadingInView = false;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSubHeading(entry.target.id);
          isHeadingInView = true;
        }
      });

      // If no heading is visible, reset the active heading
      if (!isHeadingInView) {
        setActiveSubHeading(null);
      }
    }, observerOptions);

    // Observe each h2 element
    subHeading?.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      // Cleanup observer on unmount
      subHeading?.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [subHeading]);

  return (
    <ul className="max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-md">
      {subHeading.map((post) => (
        <li key={post.key}>
          <Link
            href={`#${post.id}`}
            className={`block leading-[1.6] font-medium hover:text-white ${activeSubHeading == post.id ? "text-white" : "text-white/75"}`}
          >
            {post.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

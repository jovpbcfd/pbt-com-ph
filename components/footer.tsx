import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#252B73]">
      <div className="max-w-[1230px] mx-auto text-white p-2 md:p-10">
        <div className="flex flex-col items-center md:pb-8 lg:flex-row lg:justify-between">
          <Image
            src="/img/PANALOBET-LOGO.webp"
            alt="PANALOBET"
            width={200}
            height={40}
          />
          <div>
            <nav className="flex flex-col bg-[#252B73] text-sm py-2 px-4 lg:justify-end lg:flex-row">
              <Link
                href="/"
                className="mb-2 flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                PANALOBET
              </Link>
              <Link
                href="/slots"
                className="mb-2 flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3 hidden lg:block">|</span> SLOTS
              </Link>
              <Link
                href="/live-casino"
                className="mb-2 flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3 hidden lg:block">|</span> LIVE CASINO
              </Link>
              <Link
                href="/card-games"
                className="mb-2 flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3 hidden lg:block">|</span> CARDS
              </Link>
              <Link
                href="/fishing-games"
                className="mb-2 flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3 hidden lg:block">|</span> FISHING
              </Link>
              <Link
                href="/sports"
                className="mb-2 flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3 hidden lg:block">|</span> SPORTS
              </Link>
              <Link
                href="/lottery"
                className="mb-2 flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3 hidden lg:block">|</span> LOTTERY
              </Link>
              <Link
                href="/promotion"
                className="mb-2 flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3 hidden lg:block">|</span> PROMOTIONS
              </Link>
              <Link
                href="/blogs"
                className="mb-2 flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3 hidden lg:block">|</span> BLOGS
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white/20"></div>
      <div className="max-w-[1230px] mx-auto md:py-5">
        <p className="text-white">
          © Copyright 2025 Panalobet. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

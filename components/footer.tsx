import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#252B73]">
      <div className="max-w-[1230px] mx-auto text-white p-2 md:p-10">
        <div className="flex items-center justify-between md:pb-8">
          <Image
            src="/img/PANALOBET-LOGO.webp"
            alt="PANALOBET"
            width={120}
            height={40}
          />
          <div>
            <nav className="hidden md:flex justify-end bg-[#252B73] text-sm py-2 px-4">
              <Link
                href="/"
                className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                PANALOBET
              </Link>
              <Link
                href="/slots"
                className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3">|</span> SLOTS
              </Link>
              <Link
                href="/live-casino"
                className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3">|</span> LIVE CASINO
              </Link>
              <Link
                href="/card-games"
                className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3">|</span> CARDS
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3">|</span> FISHING
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3">|</span> SPORTS
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
              >
                <span className="px-3">|</span> LOTTERY
              </Link>
              {/* <Link href="#" className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline">
                                <span className="px-3">|</span> PROMOTIONS
                            </Link>
                            <Link href="#" className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline">
                                <span className="px-3">|</span> NEWS
                            </Link> */}
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

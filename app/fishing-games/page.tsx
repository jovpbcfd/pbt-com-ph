import Link from "next/link";
import Image from "next/image";
import FeaturedNews from "@/components/featured-news";
import FishingGuide from "./_components/fishing-guide";
import GamesBenefits from "./_components/games-benefits";
import GamesEngaging from "./_components/games-engaging";
import GamesFunction from "./_components/games-function";
import GamesPlay from "./_components/games-play";
import Conclusion from "./_components/conclusion";

export default function Page() {
  return (
    <>
      <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
        <div className="my-2 flex items-center justify-center flex-col gap-4 md:gap-8 md:my-4 lg:flex-row">
          <div>
            <div className="flex items-center md:w-[556px] md:h-[206px]">
              <Image
                src="/img/banner/fishing/image_215012.webp"
                alt="JILI FISH TOURNAMENT"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:text-left md:mb-4 md:text-xl">
              JILI FISH TOURNAMENT
            </p>
            <div className="mt-4 flex items-center justify-center md:justify-normal md:mt-3">
              <Link
                href="#"
                className="px-6 py-2 font-bold bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] rounded text-center transition-transform transform
              hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300 md:w-[150px]"
              >
                Register
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center md:w-[556px] md:h-[206px]">
              <Image
                src="/img/banner/fishing/image_204786.webp"
                alt="VIP UPGRADE Bonus Up to P12,000"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:text-left md:mb-4 md:text-xl">
              VIP UPGRADE Bonus Up to P12,000
            </p>
            <div className="mt-4 flex items-center justify-center md:justify-normal md:mt-3">
              <Link
                href="#"
                className="px-6 py-2 font-bold bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] rounded text-center transition-transform transform
              hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300 md:w-[150px]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FishingGuide />
      <GamesEngaging />
      <GamesFunction />
      <GamesPlay />
      <GamesBenefits />
      <Conclusion />
      <FeaturedNews />
    </>
  );
}

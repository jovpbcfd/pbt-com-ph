import Link from "next/link";
import Image from "next/image";
import Discover from "./_components/discover";
import HowItWorks from "./_components/how-it-works";
import GameTypes from "./_components/game-types";
import PlaySlotGames from "./_components/slot-games";
import BenefitsOfslotGames from "./_components/benefits-games";
import FeaturedNews from "@/components/featured-news";
import AdviceOnSlotGames from "./_components/advice";

export default function Page() {
  return (
    <>
      <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
        <div className="my-2 flex items-center justify-center flex-col gap-4 md:gap-8 md:my-4 lg:flex-row">
          <div>
            <div className="flex items-center md:w-[556px] md:h-[206px]">
              <Image
                src="/img/banner/slots/image_224276.webp"
                alt="Progressive Bonus 25% 30% 45%"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:text-left md:mb-4 md:text-xl">
              Progressive Bonus 25% 30% 45%
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
                src="/img/banner/slots/image_211485.webp"
                alt="220% Welcome Bonus on Slot, Arcade and Table"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:text-left md:mb-4 md:text-xl">
              220% Welcome Bonus on Slot, Arcade and Table
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
      <Discover />
      <HowItWorks />
      <GameTypes />
      <PlaySlotGames />
      <BenefitsOfslotGames />
      <AdviceOnSlotGames />
      <FeaturedNews />
    </>
  );
}

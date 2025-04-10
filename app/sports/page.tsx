import Link from "next/link";
import Image from "next/image";
import SportsBetting from "./_components/sports-betting";
import SportsGuide from "./_components/sports-guide";
import SportsMechanism from "./_components/sports-mechanism";
import SportsPayout from "./_components/sports-payout";
import SportsBettingVariation from "./_components/sports-variation";
import SportsBettingSystem from "./_components/sports-betting-system";
import SportsGamble from "./_components/sports-gamble";
import Conclusion from "./_components/conclusion";
import FeaturedNews from "@/components/featured-news";

export default function Page() {
  return (
    <>
      <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
        <div className="my-2 flex items-center justify-center flex-col gap-4 md:gap-8 md:my-4 lg:flex-row">
          <div>
            <div className="flex items-center md:w-[556px] md:h-[206px]">
              <Image
                src="/img/banner/sports/image_168936.webp"
                alt="Sports & E-Sports 110% First Deposit Bonus PHP3,300"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:mb-4 md:text-xl">
              Sports & E-Sports 110% First Deposit Bonus PHP3,300
            </p>
            <div className="mt-4 flex items-center justify-center md:mt-3">
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
                src="/img/banner/sports/image_199873.webp"
                alt="Sports Weekly Cashback up to 8.66%"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:mb-4 md:text-xl">
              Sports Weekly Cashback up to 8.66%
            </p>
            <div className="mt-4 flex items-center justify-center  md:mt-3">
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
      <SportsGuide />
      <SportsBettingVariation />
      <SportsMechanism />
      <SportsPayout />
      <SportsBetting />
      <SportsBettingSystem />
      <SportsGamble />
      <Conclusion />
      <FeaturedNews />
    </>
  );
}

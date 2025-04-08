import Link from "next/link";
import Image from "next/image";
import FeaturedNews from "@/components/featured-news";
import Conclusion from "./_components/conclusion";
import LotteryAdvice from "./_components/lottery-advice";
import LotteryBenefits from "./_components/lottery-benefits";
import LotteryExpansion from "./_components/lottery-expansion";
import LotteryGuide from "./_components/lottery-guide";
import LotteryMechanism from "./_components/lottery-mechanism";
import LotteryPlay from "./_components/lottery-play";
import LotteryTranditional from "./_components/lottery-tranditional";

export default function Page() {
  return (
    <>
      <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
        <div className="my-2 flex items-center justify-center flex-col gap-4 md:gap-8 md:my-4 lg:flex-row">
          <div>
            <div className="flex items-center md:w-[556px] md:h-[206px]">
              <Image
                src="/img/banner/lottery/image_149608.webp"
                alt="BINGO 0.9% Unlimited Daily Rebate"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:text-left md:mb-4 md:text-xl">
              BINGO 0.9% Unlimited Daily Rebate
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
                src="/img/banner/lottery/image_149622.webp"
                alt="10% Unlimited Reload-BINGO"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:text-left md:mb-4 md:text-xl">
              10% Unlimited Reload-BINGO
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
      <LotteryGuide />
      <LotteryExpansion />
      <LotteryMechanism />
      <LotteryTranditional />
      <LotteryBenefits />
      <LotteryPlay />
      <LotteryAdvice />
      <Conclusion />
      <FeaturedNews />
    </>
  );
}

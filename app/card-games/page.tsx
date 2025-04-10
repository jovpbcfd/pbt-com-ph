import Link from "next/link";
import Image from "next/image";
import CardGamesGetStarted from "./_components/card-game-get-started";
import GuideToCardGames from "./_components/card-guide";
import CardGamesMechanism from "./_components/card-mechanism";
import CardGamesOverTheYears from "./_components/card-over-years";
import Conclusion from "./_components/conclusion";
import CustomaryCardGames from "./_components/customary-card-games";
import DigitalAgeOfCardGames from "./_components/digital-age";
import OnlineCardGames from "./_components/online-card-games";
import CardGameReview from "./_components/review-choices";
import SecurityAndTrust from "./_components/security";
import BenefitsOfEngaging from "./_components/benefits-engaging";
import FeaturedNews from "@/components/featured-news";

export default function Page() {
  return (
    <>
      <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
        <div className="my-2 flex items-center justify-center flex-col gap-4 md:gap-8 md:my-4 lg:flex-row">
          <div>
            <div className="flex items-center md:w-[556px] md:h-[206px]">
              <Image
                src="/img/banner/cards/image_199682.webp"
                alt="6% Weekly Cashback"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:mb-4 md:text-xl">
              6% Weekly Cashback
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
                src="/img/banner/cards/image_200587.webp"
                alt="30% Daily Reload on Slot Arcade Table"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:mb-4 md:text-xl">
              30% Daily Reload on Slot Arcade Table
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
        </div>
      </section>
      <GuideToCardGames />
      <CardGamesOverTheYears />
      <DigitalAgeOfCardGames />
      <CardGameReview />
      <CardGamesMechanism />
      <CustomaryCardGames />
      <OnlineCardGames />
      <SecurityAndTrust />
      <CardGamesGetStarted />
      <BenefitsOfEngaging />
      <Conclusion />
      <FeaturedNews />
    </>
  );
}

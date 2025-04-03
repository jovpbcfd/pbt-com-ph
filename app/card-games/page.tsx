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

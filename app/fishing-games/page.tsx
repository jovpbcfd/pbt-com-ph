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

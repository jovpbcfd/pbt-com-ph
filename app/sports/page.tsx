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

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

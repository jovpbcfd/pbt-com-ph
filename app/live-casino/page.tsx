import CompleteGuide from "./_components/complete-guide";
import SpecialFeatures from "./_components/special-features";
import GetStarted from "./_components/get-started";
import AdviceLiveCasino from "./_components/advice-live-casinot";
import Conclusion from "./_components/conclusion";
import FeaturedNews from "@/components/featured-news";

export default function Page() {
  return (
    <>
      <CompleteGuide />
      <SpecialFeatures />
      <GetStarted />
      <AdviceLiveCasino />
      <Conclusion />
      <FeaturedNews />
    </>
  );
}

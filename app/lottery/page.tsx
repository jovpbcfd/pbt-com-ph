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

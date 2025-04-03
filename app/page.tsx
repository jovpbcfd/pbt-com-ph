import CarouselPlay from "@/components/carousel-play";
import GamesAndProducts from "@/components/games-and-products";
import ReliableAndFairness from "@/components/reliable-and-fairness";
import StepsGuide from "@/components/steps-guide";
import MobileGaming from "@/components/mobile-gaming";
import LocalPayment from "@/components/local-payment";
import InternationalPayment from "@/components/international-payment";
import PlayResponsibly from "@/components/play-responsibly";
import DepositGuide from "@/components/deposit-guide";
import WithdrawalGuide from "@/components/withdrawal-guide";
import Promotions from "@/components/promotions";
import Welcome from "@/components/welcome";
import CustomerSupport from "@/components/customer-support";
import FeaturedNews from "@/components/featured-news";
import Faq from "@/components/faq";
import RegisterAccount from "@/components/register-account";
import Explore from "@/components/explore";

import { questions } from "@/data/faq";

export default function Home() {
  return (
    <>
      <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
        <div className="my-2 md:my-4">
          <CarouselPlay />
        </div>
      </section>
      <Welcome />
      <Explore />
      <GamesAndProducts />
      <ReliableAndFairness />
      <StepsGuide />
      <MobileGaming />
      <LocalPayment />
      <InternationalPayment />
      <PlayResponsibly />
      <DepositGuide />
      <WithdrawalGuide />
      <Promotions />
      <CustomerSupport />
      <FeaturedNews />
      <Faq
        questions={questions}
        description={`At Panalobet, we want to give everyone of our players first-rate gaming experience. To ensure that your vacation is most perfect and that you might enjoy our platform, we have compiled a list of the most regularly asked questions (FAQs) from users. Here we provide complete answers to the most regularly asked questions covering anything from game choice to customer service and payment alternatives. As you explore the amazing planet Panalobet, this manual aims to assuage any fears or questions you might have.`}
      />
      <RegisterAccount />
    </>
  );
}

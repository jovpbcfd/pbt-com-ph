import CarouselPlay from "@/components/carousel-play";
import GamesAndProducts from "@/components/games-and-products";
import ReliableAndFairness from "@/components/reliable-and-fairness";
import StepsGuide from "@/components/steps-guide";
import MobileGaming from "@/components/mobile-gaming";
import LocalPayment from "@/components/local-payment";
import InternationalPayment from "@/components/international-payment";
import PlayResponsibly from "@/components/play-responsibly";
import DepositGuide from "@/components/deposit-guide";
import WithdrawalGuide from '@/components/withdrawal-guide'
import Promotions from "@/components/promotions";
import Welcome from "@/components/welcome";
import CustomerSupport from "@/components/customer-support";
import FeaturedNews from "@/components/featured-news";
import Faq from "@/components/faq";
import RegisterAccount from '@/components/register-account'

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
      <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
        <div className="my-2 md:my-4">
          <h2 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase md:mb-2 md:flex-row md:text-xl lg:text-2xl">
            <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
            <span className="text-center md:whitespace-nowrap md:px-2">
              Explore the Exceptional Games and Products from Panalobet
            </span>
            <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
          </h2>
          <p>
            Online casinos have changed drastically in recent years to provide players with an always increasing spectrum of enjoyment.
            Offering a wide range of gaming choices that fit all kinds of players, from beginners to seasoned pros, Panalobet stands out for being Slots,
            fishing games, live casino games, sports betting, card games, and lottery games are among the well chosen games on our site.
            Panalobet has everything to grab your attention and offer hours of entertainment regardless of the type of experience you're seeking for.
          </p>
        </div>
      </section>
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
      <Faq questions={questions} description={`At Panalobet, we want to give everyone of our players first-rate gaming experience. To ensure that your vacation is most perfect and that you might enjoy our platform, we have compiled a list of the most regularly asked questions (FAQs) from users. Here we provide complete answers to the most regularly asked questions covering anything from game choice to customer service and payment alternatives. As you explore the amazing planet Panalobet, this manual aims to assuage any fears or questions you might have.`} />
      <RegisterAccount />
    </>
  );
}

import Image from "next/image";

export default function SportsGamble() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <div>
          <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
            Why gamble with Panalobet?
          </h2>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="w-full lg:w-[70%]">
              <p className="mb-2 md:my-4">
                Panalobet is dedicated to offer the greatest online sports
                betting environment. These are some reasons you ought to place
                bets with us:
              </p>
              <ul className="list-disc pl-15 md:pl-10">
                <li>
                  <p className="mb-2 md:my-4">
                    We present some of the best odds available in the industry,
                    therefore increasing your chances of success.
                  </p>
                </li>
                <li>
                  <p className="mb-2 md:my-4">
                    We accommodate every betting style from conventional bets to
                    sophisticated choices including live betting and parlays.
                  </p>
                </li>
                <li>
                  <p className="mb-2 md:my-4">
                    Using our totally mobile-optimized interface, bet anywhere,
                    anytime.
                  </p>
                </li>
                <li>
                  <p className="mb-2 md:my-4">
                    Take use of our frequent promos to increase your betting
                    possibilities.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full flex items-center justify-center rounded-md lg:w-[300px] lg:h-[300px]">
              <Image
                src="/img/Game_Sports/WHY GAMBLE WITH PANALOBET.webp"
                width={300}
                height={300}
                alt="WHY GAMBLE WITH PANALOBE"
              />
            </div>
          </div>
          <div>
            <h3 className="text-md uppercase md:font-[800] md:text-md">
              Strategies for Sports Betting to Maximize Your Success
            </h3>
            <p className="mb-2 md:my-4">
              Although sports betting entails some luck, there are various
              techniques you may use to raise your odds of success:
            </p>
          </div>
          <div>
            <ul className="list-disc pl-15 md:pl-10">
              <li>
                <p className="mb-2 md:my-4">
                  <span className="font-bold">Research and Analyze:</span>
                  Your odds of making an intelligent wager increase with
                  knowledge of the teams or athletes.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  <span className="font-bold">Handle Your Bankroll:</span>
                  Plan your betting activities and follow that budget. Success
                  over long terms depends on responsible betting.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  <span className="font-bold">Leverage Bonuses:</span>
                  To optimize your possible payback, employ the incentives and
                  promotions Panalobet presents.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function GamesBenefits() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          Benefits of Playing Panalobet Fishing
        </h2>
        <p className="mb-2 md:my-4">
          Panalobet is the perfect platform for appreciating Fishing games for a
          lot of reasons. Among the advantages we provide are just a handful
          here:
        </p>
        <div className="flex items-center flex-col lg:flex-row">
          <ul className="list-disc pl-15 md:pl-10 lg:w-[70%]">
            <li>
              <span className="font-bold">Confined and Safe Platform</span>
              <p className="mb-2 md:my-2">
                Being a licensed online casino, Panalobet makes sure players may
                enjoy their games in a safe and controlled surroundings. Our
                platform lets you play with confidence since it follows rigorous
                industry criteria for fairness and safety.
              </p>
            </li>
            <li>
              <span className="font-bold">Vast Choice of Fishing Games</span>
              <p className="mb-2 md:my-2">
                Our selection of Fishing games guarantees that you will always
                find something fresh and interesting as each one of them has
                different themes and features. From low stakes contests to
                laid-back fishing enjoyment, Panalobet has something for every
                kind of gamer.
              </p>
            </li>
            <li>
              <span className="font-bold">Mobile Acceptability</span>
              <p className="mb-2 md:my-2">
                Panalobet is completely mobile device compatible, allowing you
                to carry your fishing trip anywhere you go. You will have a
                flawless experience free of quality or functionality degradation
                whether you are on your phone or tablet.
              </p>
            </li>
            <li>
              <span className="font-bold">Exciting Bonuses and Promotions</span>
              <p className="mb-2 md:my-2">
                We present a range of incentives and promotions to improve your
                gaming experience since we enjoy rewarding our gamers. Look for
                bonuses and unique deals to raise your bankroll and raise your
                chances of huge win landing.
              </p>
            </li>
          </ul>
          <div className="w-full self-center flex items-center justify-center md:rounded-md lg:w-[500px] lg:h-[500px]">
            <Image
              src="/img/Game_Fishing/Playing Panalobet Fishing-fishing.webp"
              width={500}
              height={500}
              alt="How games funcion fishing"
            />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-md uppercase md:font-[800] md:text-md">
            Techniques for Increasing Fishing Success
          </h3>
          <p className="mb-2 md:my-4">
            Although fishing games combine luck with ability, there are a few
            pointers that could raise your odds of winning:
          </p>
          <div>
            <ul className="list-disc pl-15 md:pl-10">
              <li>
                <p className="mb-2 md:my-4">
                  Learn the rules, fish values, and features of the game before
                  you start to play. Understanding your expectations will enable
                  you to make better choices throughout gameplay.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  Control Your Bankroll. Plan your game session's expenses and
                  follow them exactly. Good bankroll control guarantees that you
                  can play for more extended times and prevent overpaying.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  Take advantage of bonuses. Look for incentives and other
                  enhancements that can raise your payments. These greatly
                  increase your likelihood of winning big.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  Select the Appropriate Game. Strategies in various fishing
                  games vary. Invest time investigating and identify the game
                  most appropriate for your play approach.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

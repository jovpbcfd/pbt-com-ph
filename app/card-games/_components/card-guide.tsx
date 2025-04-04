import Link from "next/link";
import Image from "next/image";

export default function GuideToCardGames() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-16">
        <h1 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase md:mb-2 md:flex-row md:text-xl lg:text-2xl">
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
          <span className="text-center md:px-2">
            An In-Depth Guide to Panalobet Card Games: The Perfect Online Gaming
            Experience
          </span>
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
        </h1>
        <div className="text-justify md:text-left">
          <p className="mb-2 md:mb-4">
            With different games appealing to gamers all around, the realm of
            online gambling has experienced amazing expansion over the years.
            Among these games, card games have become among the most often
            chosen ones. Card games' classic mix of strategy, skill, and chance
            is what always makes them appealing. At Panalobet, we understand the
            great appeal of these games and provide a large range of choices to
            suit both novice gamers and experienced ones. With a selection of
            premium products, Panalobet has you covered whether your taste is
            for a classic card gaming experience or for investigating creative
            variants.
          </p>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4 md:mb-8 md:flex-row">
          <div className="w-full self-center flex items-center justify-center rounded-md md:w-[373px] md:h-[373px]">
            <Image
              src="/img/Game_Cards/parent-card games.webp"
              alt="Card Games"
              width={373}
              height={373}
            />
          </div>
          <div>
            <h2 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase my-2 md:mt-5 md:mb-0 md:flex-row md:text-xl lg:text-2xl">
              <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
              <span className="text-center md:whitespace-nowrap md:px-2">
                Introducing Panalobet Card Games
              </span>
              <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                <Image
                  src="/img/Game_Cards/card-blackjack lucky ladies.webp"
                  alt="Card Black Jack lucky ladies"
                  width={180}
                  height={180}
                  className="lg:self-end"
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                <Image
                  src="/img/Game_Cards/card-caribbean.webp"
                  alt="Card Caribbean stud poker"
                  width={180}
                  height={180}
                  className="lg:self-end"
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                <Image
                  src="/img/Game_Cards/card-mini flush.webp"
                  alt="Card Mini Flush"
                  width={180}
                  height={180}
                  className="lg:self-end"
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                <Image
                  src="/img/Game_Cards/card-pusoy go.webp"
                  alt="Card Pusoy go"
                  width={180}
                  height={180}
                  className="lg:self-end"
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                <Image
                  src="/img/Game_Cards/card-sic bo.webp"
                  alt="Card sicbo"
                  width={180}
                  height={180}
                  className="lg:self-start"
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                <Image
                  src="/img/Game_Cards/card-teen paiti.webp"
                  alt="Card teen paiti"
                  width={180}
                  height={180}
                  className="lg:self-start"
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                <Image
                  src="/img/Game_Cards/card-tongits go.webp"
                  alt="Card tongits go"
                  width={180}
                  height={180}
                  className="lg:self-start"
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                <Image
                  src="/img/Game_Cards/card-video poker.webp"
                  alt="Card video poker"
                  width={180}
                  height={180}
                  className="lg:self-start"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-2 md:mt-0">
              <Link
                href="#"
                className="bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] px-4 py-2 rounded shadow-md text-center
                        transition-transform transform hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300
                        md:w-[150px]
                        "
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <div className="text-justify md:text-left">
            <p className="mb-2 md:my-4">
              Long held in particular importance in the gambling sector are card
              games. Their simple guidelines are simply one way they enthrall
              players; another is their psychological element of outwitting
              opponents. At Panalobet, we know why these games are still so
              beloved in many different countries and generations. One of the
              top online gambling sites in the Philippines, Panalobet provides a
              wide range of card games that let users enjoy the thrill of a
              casino right from their houses.
            </p>
            <p className="mb-2 md:my-4">
              We have something for everyone whether your interests are
              blackjack, poker, or baccarat—a thrill-seeking game. Panalobet's
              card game products aim to guarantee an interesting, flawless
              experience combining contemporary variations on classic games with
              traditional favorites. Our online gambling environment is as fun
              as it is safe since innovative technologies running our platform
              and fair play are our main priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

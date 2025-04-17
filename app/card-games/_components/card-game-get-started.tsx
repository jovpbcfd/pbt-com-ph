import Image from "next/image";

export default function CardGamesGetStarted() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          How to Get Started with Card Games from Panalobet
        </h2>
        <p className="mb-2 md:my-4">
          Starting with Panalobet is easy and plain forward. Whether you know
          nothing about online gambling or are a seasoned gambler, our simple
          interface makes jumping right in easy. Here is a detailed walk-through
          guide on starting to play cards games at Panalobet:
        </p>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <ul className="list-decimal pl-15 w-full md:pl-10 lg:w-[70%]">
            <li>
              <p className="mb-2 md:my-4">
                Create an account by first just registering for a free one on
                our website. You will have to supply some personal information
                such as your name, email address, and birthdate.
              </p>
            </li>
            <li>
              <p className="mb-2 md:my-4">
                Once your account is set up, one of the several safe payment
                options we provide allows you to make a deposit. This will cover
                your account so you may begin enjoying your preferred card
                games.
              </p>
            </li>
            <li>
              <p className="mb-2 md:my-4">
                Look over our assortment of card games and choose the one that
                most interests you. For those who wish to hone before using
                actual money, we also provide demo modes.
              </p>
            </li>
            <li>
              <p className="mb-2 md:my-4">
                Choose your game then it's time to lay your bets. Every game has
                minimum and maximum bet limitations; hence, before you lay your
                wager, make sure you review the regulations.
              </p>
            </li>
            <li>
              <p className="mb-2 md:my-4">
                Use your ability and tactics to try to win once the game starts.
                Every game has different regulations, hence before you start
                playing, be sure you know the payout systems and how to win.
              </p>
            </li>
          </ul>
          <div className="w-full flex items-center justify-center rounded-md lg:w-[350px] lg:h-[350px]">
            <Image
              src="/img/Game_Cards/How to Get Started with Card Games from Panalobet1.webp"
              width={350}
              height={350}
              alt="Get started with card games"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

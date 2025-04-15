import Image from "next/image";

export default function GamesFunction() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          How Panalobet's Fishing Games Function
        </h2>
        <p className="mb-2 md:my-4">
          At Panalobet, we have a selection of Fishing games meant to provide a
          top-notch and immersive encounter. These games entwine fascinating,
          dynamic components with classic fishing techniques to keep players
          returning for more. Here is a closer view of how Fishing games operate
          on our platform:
        </p>
        <div className="flex items-center flex-col lg:flex-row">
          <div className="w-full lg:w-[50%]">
            <div>
              <h3 className="text-md font-bold uppercase md:font-[800] md:text-md">
                Fundamental Player Behavior
              </h3>
              <p className="mb-2 md:my-4">
                Usually, fishing games revolve on the concept of aiming and
                shooting a fishing line to capture different kinds of fish.
                Using a virtual fishing rod or line, players have to target the
                fish in the game by controlling direction, force, and speed.
                Every kind of fish has value; rarer species are especially
                valuable and hence widely sought for.
              </p>
              <p className="mb-2 md:my-4">
                Usually beginning with a bet, players' choices and the
                particular game will affect how much they stake. Players can
                start targeting their fishing line at the fish on the screen
                once the bet is laid. The difficulty is timing the line exactly
                to land the catch and properly shooting the line at the fish.
                Effective captures pay off; the worth of the fish caught
                determines the wager paid and so determines the outcome.
              </p>
            </div>
            <div>
              <h3 className="text-md font-bold uppercase md:font-[800] md:text-md">
                Fish Varieties and Values
              </h3>
              <p className="mb-2 md:my-4">
                Not all fish in fishing games are equal. Fish of different kinds
                have different values; so, players have to try to catch the ones
                with the best payback. Fish are classified in most games
                depending on their rarity and degree of difficulty. While rare
                or legendary fish can pay significantly more, common fish may be
                more easy to catch yet give less earnings. Players who wish to
                enhance their chances of huge win must first understand the
                values and actions of various fish.
              </p>
            </div>
          </div>
          <div className="w-full self-center flex items-center justify-center md:ml-26 md:rounded-md lg:w-[400px] lg:h-[400px] lg:w-[50%]">
            <Image
              src="/img/Game_Fishing/How Panalobet's Fishing Games Function-fishing.webp"
              width={400}
              height={400}
              alt="How games funcion fishing"
            />
          </div>
        </div>
        <div>
          <h3 className="text-md uppercase md:font-[800] md:text-md">
            Modern Features and Rewards
          </h3>
          <p className="mb-2 md:my-4">
            Fishing games at Panalobet include a great range of extra features
            including multipliers, special ability, and jackpots to keep things
            interesting. These tools will greatly boost your payouts, thereby
            enhancing the game's excitement. Among the most often occurring
            extra features are:
          </p>
          <div>
            <ul className="list-disc pl-15 md:pl-10">
              <li>
                <p className="mb-2 md:my-4">
                  Some fish species can be wild cards, meaning they might
                  replace other fish to raise your odds of winning.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  Multipliers can raise the compensation for a successful
                  capture, occasionally by a notable sum, therefore increasing
                  your winnings.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  Some games provide power-ups—stronger fishing rods or faster
                  reels—that enable you to more readily capture fish.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  Many fishing games provide jackpot chances, whereby players
                  may win a large prize should they find the correct fish or set
                  off a particular combo.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  These sophisticated tools maintain the lively, fresh gaming
                  with lots of opportunities for large gains.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

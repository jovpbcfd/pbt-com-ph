import Image from "next/image";

export default function LotteryPlay() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          Play Fishing Lottery at Panalobet
        </h2>
        <p className="mb-2 md:my-4">
          Starting with the fishing lottery at Panalobet is straightforward and
          quick. This is a detailed manual to enable you to enter the action:
        </p>
        <div>
          <div>
            <h3 className="text-md uppercase md:font-[800] md:text-md">
              The Laws of Sports Betting
            </h3>
            <p className="mb-2 md:my-4">
              Visit the Panalobet website first to open your account by clicking
              the "Sign Up" choice. You will need to submit your name, email
              address, and password—some basic information. You'll be ready to
              start playing after your account is configured.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="w-full lg:w-[70%]">
              <div>
                <h3 className="text-md uppercase md:font-[800] md:text-md">
                  Second step: create a deposit.
                </h3>
                <p className="mb-2 md:my-4">
                  You must fund your account before you can lay your first
                  wager. Among the other payment options Panalobet provides are
                  credit and debit cards, e-values, and bank transfers. Select
                  the one that best fits you and safely make your deposit.
                </p>
              </div>
              <div>
                <h3 className="text-md uppercase md:font-[800] md:text-md">
                  Third step: pick a fishing lottery game.
                </h3>
                <p className="mb-2 md:my-4">
                  Look over our large assortment of fishing lottery games and
                  pick the one that most appeals to you. Take your time to
                  choose the ideal game for you as every one of them presents
                  unique characteristics, chances, and reward pools.
                </p>
              </div>
              <div>
                <h3 className="text-md uppercase md:font-[800] md:text-md">
                  Fourth step: Choosing your catch or numbers.
                </h3>
                <p className="mb-2 md:my-4">
                  After deciding on your game, it's time to decide on your
                  quantity or kind of fish you wish to catch. You might decide
                  on your own choices or go with a random "quick pick." The
                  decision is yours!
                </p>
              </div>
            </div>
            <div className="w-full flex items-center mx-auto justify-center rounded-md lg:w-[300px] lg:h-[300px]">
              <Image
                src="/img/Game_Lottery/Play Fishing Lottery at Panalobet.webp"
                width={300}
                height={300}
                alt="Play Fishing Lottery at Panalobet"
              />
            </div>
          </div>
          <div>
            <h3 className="text-md uppercase md:font-[800] md:text-md">
              Fifth step: Lay your bet.
            </h3>
            <p className="mb-2 md:my-4">
              Choose the numbers or fish species you wish to bet on after
              deciding how much you would want to stake. Your possible earnings
              increase with increasing your bet.
            </p>
          </div>
          <div>
            <h3 className="text-md uppercase md:font-[800] md:text-md">
              Step 6: Await the Draw.
            </h3>
            <p className="mb-2 md:my-4">
              All you have to do after laying your wager is wait for the draw.
              Real-time results let you quickly find whether you have won and
              how much you have made.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

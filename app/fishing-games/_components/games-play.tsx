import Image from "next/image";

export default function GamesPlay() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          Playing Fishing Games at Panalobet
        </h2>
        <p className="mb-2 md:my-4">
          With a simple and user-friendly platform, at Panalobet we have made it
          easy for you to explore the realm of Fishing games. Here's a detailed
          walk-by-step advice on beginning play and grabbing some large gains:
        </p>
        {/* <div>
            <ul className="list-decimal pl-15 md:pl-10">
              <li>
                <p className="mb-2 md:my-4">
                  We guarantee that there is something for every kind of player by
                  providing a wide spectrum of card games, from old favorites to
                  innovative new variants.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  Panalobet is dedicated to creating a fair and safe gaming
                  environment by means of modern technologies and reputable game
                  suppliers, therefore guaranteeing the integrity of every game.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  You may play your preferred card games anywhere, at any time
                  using our platform from desktop and mobile devices.
                </p>
              </li>
              <li>
                <p className="mb-2 md:my-4">
                  Regular incentives, promotions, and prizes help us to improve
                  your gaming experience and raise your chances of large wins.
                </p>
              </li>
            </ul>
          </div> */}
        <div className="flex items-center flex-col lg:flex-row">
          <div className="w-full lg:w-[70%]">
            <div>
              <h3 className="text-md uppercase md:font-[800] md:text-md">
                First step: Open an account
              </h3>
              <p className="mb-2 md:my-4">
                Making an account on Panalobet comes first in your Fishing
                Adventure. To start the procedure just visit our website and
                click the "Registration" button. You will have to supply simple
                details such as your login, password, and email address. You can
                log in once your account is configured and begin to explore the
                realm of Fishing games.
              </p>
            </div>
            <div>
              <h3 className="text-md uppercase md:font-[800] md:text-md">
                Second step: Fund depositing
              </h3>
              <p className="mb-2 md:my-4">
                You will have to fund your account if you wish to play real
                money Fishing games. Among the several safe and handy payment
                options available from Panalobet are credit/debit cards, popular
                e-wallets, and bank transfers. Just pick your chosen approach,
                make the necessary deposit, and the money will show up in your
                account. Fast processing of transactions lets you start playing
                without any waiting.
              </p>
            </div>
            <div>
              <h3 className="text-md uppercase md:font-[800] md:text-md">
                Third: Select Your Game
              </h3>
              <p className="mb-2 md:my-4">
                Once your account is loaded, peruse our large array of Fishing
                games. Every game has a different subject, graphics, and
                mechanics; so, you can choose the one that most suits your
                taste. Panalobet offers a game for everyone, regardless of their
                preferred level of activity—from low stakes adventure to
                leisurely fishing.
              </p>
            </div>
          </div>
          <div className="w-full self-center flex items-center justify-center md:rounded-md lg:w-[500px] lg:h-[500px]">
            <Image
              src="/img/Game_Fishing/Playing Fishing Games at Panalobet-fishing.webp"
              width={500}
              height={500}
              alt="How games funcion fishing"
            />
          </div>
        </div>
        <div>
          <h3 className="text-md uppercase md:font-[800] md:text-md">
            Fourth step: Learn the interface
          </h3>
          <p className="mb-2 md:my-4">
            Spend some time learning the game UI before you begin to play.
            Though most fishing games have easy controls, it's crucial to know
            how the fishing line operates, how to modify your bets, and where to
            locate game-specific bonuses and features. Every game also features
            a help section so you may quickly find guidelines and regulations to
            enhance your gameplay.
          </p>
        </div>
        <div>
          <h3 className="text-md uppercase md:font-[800] md:text-md">
            Step five: Get going and winning.
          </h3>
          <p className="mb-2 md:my-4">
            Start fishing after you feel at ease with the game! Aim, shot, and
            capture fish with the controls. Your odds of landing uncommon and
            valuable fish increase with increasing accuracy of your shots.
            Playing will allow you to unlock several levels and fantastic
            bonuses, therefore enhancing the game's excitement. As you pursue
            down the largest catches and reel in huge prizes, savor the
            adrenaline surge!
          </p>
        </div>
      </div>
    </section>
  );
}

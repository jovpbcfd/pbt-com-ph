import Image from "next/image";

export default function AdviceLiveCasino() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          Advice for Dominating Live Casino
        </h2>
        <p className="mb-2 md:my-4">
          Although live casino games mostly rely on luck, there are some
          techniques you may employ to raise your odds of winning:
        </p>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <ul className="list-decimal pl-15 w-full md:pl-10 lg:w-[70%]">
            <li>
              <p className="mb-2 md:my-4">
                Learn the rules of the game before you begin to play so you may
                be comfortable with them. Every game has particular rules;
                knowing them will enable you to make wise decisions during the
                game.
              </p>
            </li>
            <li>
              <p className="mb-2 md:my-4">
                Control your bankroll. Create a budget ahead of your game and
                follow it. Good bankroll control guarantees that you spend less
                than you could afford to lose.
              </p>
            </li>
            <li>
              <p className="mb-2 md:my-4">
                Use bonuses to your advantage Panalobet presents a range of
                bonuses and promotions meant to increase your bankroll. Make
                sure you take full use of the present deals by reviewing them.
              </p>
            </li>
            <li>
              <p className="mb-2 md:my-4">
                One needs to know when to turn away. Maintaining a pleasurable
                and responsible gaming experience depends on you understanding
                when to stop and setting boundaries for yourself regardless of
                your winning or losing trend.
              </p>
            </li>
          </ul>
          <div className="w-full flex items-center mx-auto justify-center rounded-md lg:w-[300px] lg:h-[300px]">
            <Image
              src="/img/Game_Live Casino/Advice for Dominating Live Casino.webp"
              width={300}
              height={300}
              alt="Advice for Dominating Live Casino"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

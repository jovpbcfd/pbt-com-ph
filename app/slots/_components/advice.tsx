import Image from "next/image";

export default function AdviceOnSlotGames() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-3xl">
          Advice on Slots Games
        </h2>
        <p className="mb-2 md:my-4">
          Although slot machines are essentially games of chance, there are few
          techniques that could improve your experience and raise your chances
          of winning.
        </p>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <ul className="list-disc pl-15 w-full md:pl-10 lg:w-[70%]">
            <li>
              <span className="font-[900]">Roll Management in Banking</span>
              <p>
                Create a budget before you begin to play and keep to it. This
                helps you to guarantee responsible gambling behavior and
                avoidance of overspending. Set personal boundaries and schedule
                breaks to prevent running after losses.
              </p>
            </li>
            <li>
              <span className="font-[900]">Know Your Player</span>
              <p>
                Spend some time looking over the paytable, deciphering the
                symbols, and learning about the additional features of the game
                before sitting at a slot. This will increase your chances of
                winning and assist you to make wise betting judgments.
              </p>
            </li>
            <li>
              <span className="font-[900]">Enjoy Yourself</span>
              <p>
                Recall that slot games are essentially for entertainment value.
                Though the possibility for large rewards is tempting, always
                play for enjoyment and savor the experience regardless of the
                result.
              </p>
            </li>
            <li>
              <span className="font-[900]">Conclusion</span>
              <p>
                For decades, slot games have been a mainstay of the gaming
                business; now, with the growth of online casinos like Panalobet,
                they are more accessible and thrilling than ever. Panalobet
                provides a wide variety of slot games to fit any player's tastes
                and preferences whether your goal is to try your luck at
                striking a huge progressive jackpot or relive the nostalgia of
                classic slots.
              </p>
              <p>
                Understanding how slots operate, selecting the appropriate
                games, and playing sensibly will help you to improve your
                experience and raise your odds of winning large. Why then? Enter
                the amazing universe of slot games at Panalobet and spin your
                way to get fantastic prizes right now!
              </p>
            </li>
          </ul>
          <div className="w-full flex items-center mx-auto justify-center rounded-md lg:w-[300px] lg:h-[300px]">
            <Image
              src="/img/Game_slots/(11) Advice on Slots Games-slots.webp"
              width={300}
              height={300}
              alt="Advice on slots games"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

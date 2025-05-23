import Image from "next/image";

export default function GameTypes() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-15">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-3xl">
          Slot Game Types at Panalobet
        </h2>
        <p className="mb-2 md:my-4">
          With its distinctive themes and features, Panalobet presents a large
          range of slot games. There is something for everyone whether your
          taste is for the simplicity of conventional slots or the intricacy of
          video slots including several extra features.
        </p>
        <div className="grid grid-cols-1 gap-3 place-items-center lg:gap-y-6 lg:gap-x-3 lg:grid-cols-2">
          <div>
            <div className="w-full flex items-center mx-auto justify-center rounded-md lg:w-[250px] lg:h-[250px]">
              <Image
                src="/img/Game_slots/(6) Simple Slots-slots.webp"
                width={250}
                height={250}
                alt="Simple Slots"
              />
            </div>
            <div className="text-center">
              <h3 className="text-md font-bold uppercase md:font-[800] md:my-4 md:text-xl">
                Simple Slots
              </h3>
              <p className="mb-2">
                Featuring three reels and straightforward gameplay, classic
                slots remind one of the first slot machines. Many times, these
                games center on conventional symbols as fruit, bars, and sevens.
                Those who want simple gaming free from interruptions will find
                ideal fit in classic slots.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center  mx-auto justify-center rounded-md lg:w-[250px] lg:h-[250px]">
              <Image
                src="/img/Game_slots/(7) Video Slots-slots.webp"
                width={250}
                height={250}
                alt="Video Slots"
              />
            </div>
            <div className="text-center">
              <h3 className="text-md font-bold uppercase md:font-[800] md:text-xl md:my-4">
                Video Slots
              </h3>
              <p className="mb-2">
                Modern advancement of slot games is video slots. Usually running
                five or more reels, these games have advanced graphics,
                animations, and sound effects. Additionally providing a range of
                bonus features such as free spins, multipliers, and mini-games,
                video slots can help to intensify the action.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center  mx-auto justify-center rounded-md lg:w-[250px] lg:h-[250px]">
              <Image
                src="/img/Game_slots/(8) Progressive Slots-slots.webp"
                width={250}
                height={250}
                alt="Progressive Slots"
              />
            </div>
            <div className="text-center">
              <h3 className="text-md font-bold uppercase md:font-[800] md:my-4 md:text-xl">
                Progressive Slots
              </h3>
              <p className="mb-2">
                Progressive slots are the games for you if your dream is of
                making a large payoff. Every stake made increases the prize
                found in these slots. Until one fortunate player sets off the
                jackpot and collects the cash, the jackpot keeps rising. With
                many progressive slots featuring different themes, Panalobet
                makes it simple for you to choose a game that fits your taste
                and provides the possibility for life-changing rewards.
              </p>
            </div>
          </div>
          <div className="lg:mb-auto">
            <div className="w-full flex items-center mx-auto justify-center rounded-md lg:w-[250px] lg:h-[250px]">
              <Image
                src="/img/Game_slots/(9) Slots with Theme-slots.webp"
                width={250}
                height={250}
                alt="Slots with theme"
              />
            </div>
            <div className="text-center">
              <h3 className="text-md font-bold uppercase md:font-[800] md:my-4 md:text-xl">
                Slots with Theme
              </h3>
              <p className="mb-2">
                Designed around popular subjects such movies, TV shows, or even
                historical events, themed slots reflect Often using well-known
                characters, songs, and graphic aspects from the topic, these
                games provide players a singular experience. Panalobet has a
                themed slot for you regardless of your tastes in adventure,
                fantasy, or vintage films.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

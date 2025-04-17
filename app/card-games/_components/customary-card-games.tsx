import Image from "next/image";

export default function CustomaryCardGames() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full lg:w-[70%]">
            <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
              Customary Card Games
            </h2>
            <p className="mb-2 md:my-4">
              Usually involving face-to--face interactions with other players,
              card games are played traditionally with actual cards. Traditional
              card games unite individuals in a social setting whether they are
              a laid-back game among friends or a high-stakes poker tournament
              at a casino. The game gains some appeal and realism from the
              tactile sensation of handling actual cards, distributing them, and
              physically touching the deck. Players also use body language,
              real-time dialogue, and tactics meant to improve the game's social
              component.
            </p>
            <p className="mb-2 md:my-4">
              Still, classic card games have certain disadvantages as well. They
              call for a physical location and other players' presence. This can
              restrict access, particularly in cases when you can't locate
              someone to play with or live in an area with restricted casino or
              gaming room access. Furthermore time-consuming and inconvenient
              are the setup and cleanup required for classic card games.
            </p>
          </div>
          <div className="w-full flex items-center justify-center rounded-md lg:w-[350px] lg:h-[350px]">
            <Image
              src="/img/Game_Cards/Customary Card Games1 copy.webp"
              width={350}
              height={350}
              alt="Customary Card Games"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

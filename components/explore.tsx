import Image from "next/image";

export default function Explore() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:my-4">
        <h2 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase md:my-7 md:flex-row md:text-xl lg:text-2xl">
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
          <span className="text-center md:whitespace-nowrap md:px-2">
            Explore the Exceptional Games and Products from Panalobet
          </span>
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
        </h2>
        <p>
          Online casinos have changed drastically in recent years to provide
          players with an always increasing spectrum of enjoyment. Offering a
          wide range of gaming choices that fit all kinds of players, from
          beginners to seasoned pros, Panalobet stands out for being Slots,
          fishing games, live casino games, sports betting, card games, and
          lottery games are among the well chosen games on our site. Panalobet
          has everything to grab your attention and offer hours of entertainment
          regardless of the type of experience you're seeking for.
        </p>
        <div className="mt-4 flex flex-col justify-between gap-4 md:mb-8 md:flex-row">
          <div className="w-full self-center flex items-center justify-center rounded-md md:w-[354px] md:h-[454px]">
            <Image
              src="/img/welcome-games/main-beginning-panalobet.webp"
              width={354}
              height={454}
              alt="Explore Main Beginning panalobet"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center rounded-md  md:w-[200px] md:h-[200px] lg:w-[274px] lg:h-[274px]">
              <Image
                src="/img/welcome-games/parent-slots.webp"
                width={274}
                height={274}
                alt="Explore slots"
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] lg:w-[274px] lg:h-[274px]">
              <Image
                src="/img/welcome-games/parent-fishing.webp"
                width={274}
                height={274}
                alt="Explore Fishing Game"
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] lg:w-[274px] lg:h-[274px]">
              <Image
                src="/img/welcome-games/parent-live casino.webp"
                width={274}
                height={274}
                alt="Explore Live Casino"
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] lg:w-[274px] lg:h-[274px]">
              <Image
                src="/img/welcome-games/parent-card games.webp"
                width={274}
                height={274}
                alt="Explore Card Games"
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[200px] md:w-[200px] md:h-[200px] lg:w-[274px] lg:h-[274px]">
              <Image
                src="/img/welcome-games/parent-sports.webp"
                width={274}
                height={274}
                alt="Explore Sports"
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px] lg:w-[274px] lg:h-[274px]">
              <Image
                src="/img/welcome-games/parent-lottery.webp"
                width={274}
                height={274}
                alt="Explore Lottery"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

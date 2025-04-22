import Image from "next/image";

export default function LotteryTranditional() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full lg:w-[70%]">
            <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
              Lottery Traditionally vs Fishing Lottery
            </h2>
            <p className="mb-2 md:my-4">
              Usually involving buying tickets with sets of numbers and waiting
              for the draw to ascertain the winners, traditional lotteries Part
              of the reason this approach has been so popular for millennia is
              its really simple and understandable nature. But the fishing
              lottery adds fresh and interesting components to the mix by
              blending the interactive character of fishing games with the
              excitement of lottery-style drawings.
            </p>
            <p className="mb-2 md:my-4">
              Fishing lottery lets players enjoy more varied and thrilling
              gaming whereas regular lotteries can restrict players to a certain
              amount of draws and combinations. Many fishing lottery games
              provide variable prizes depending on the fish you catch, several
              degrees of difficulty, and a broad spectrum of fish species. For
              those searching for something fresh and unique, fishing lottery
              offers a more dynamic and engaging experience than conventional
              lotteries.
            </p>
          </div>
          <div className="w-full flex items-center mx-auto justify-center rounded-md lg:w-[300px] lg:h-[300px]">
            <Image
              src="/img/Game_Lottery/Lottery Traditionally vs Fishing Lottery.webp"
              width={300}
              height={300}
              alt="Lottery"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function LotteryMechanism() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full lg:w-[70%]">
            <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
              The Mechanism of Fishing Lottery
            </h2>
            <p className="mb-2 md:my-4">
              Fundamentally, the fishing lottery is not very complicated.
              Players pick a set of numbers or a designated "catch" they think
              will win, then wait for the draw to see whether their guess is
              accurate. Still, the game offers far more than first greets the
              eye. Those looking for an immersive gaming experience will find
              fishing lottery games appealing since they are bursting with
              thrill, expectation, and lots of chances to win.
            </p>
            <p className="mb-2 md:my-4">
              The game mechanisms define the fishing lottery. Depending on the
              game, your objective may be choosing particular fish or
              fishing-related components that fit a predefined set of numbers or
              combinations. Although classic lottery games have some elements,
              fishing lottery offers an exciting and dynamic spin that enhances
              every game. The extra layers of interaction and strategy let
              players participate more in the process and produce an experience
              significantly more interesting than those of conventional lottery
              games.
            </p>
          </div>
          <div className="w-full flex items-center mx-auto justify-center rounded-md lg:w-[300px] lg:h-[300px]">
            <Image
              src="/img/Game_Lottery/FISHING.webp"
              width={300}
              height={300}
              alt="Fishing Lottery"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

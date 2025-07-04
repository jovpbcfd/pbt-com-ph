import Image from "next/image";

export default function CardGameV2() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md mt-2 lg:mt-4">
      <div className="flex justify-center items-center lg:mb-2">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_Cards/parent-card games.webp"
            alt="Card Games"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="pb-2 mb-2 md:pb-3 md:mb-4">
        <div className="border-b-[1px] border-[#8F92B0] pb-2">
          <h3 className="text-md uppercase text-center md:font-[800] md:text-xl">
            Games at the Table
          </h3>
        </div>
        <p className="mb-2 text-center md:my-4">
          Discover timeless classics with Panalobet's table games. Our platform
          offers competitive odds and excellent gameplay for each game you want
          to play, including blackjack, baccarat, and poker. Utilize the
          elegance of these classic games brought to life with contemporary
          technology to test your ability and strategy against other players or
          the house.
        </p>
        <p className="mb-2 text-center md:my-4">
          You can play and pursue immediate riches with Lottery Panalobet's
          lottery games. With its spectacular rewards, quickdraws, and ease of
          participation, our lottery division provides infinite entertainment.
          Panalobet makes lottery gaming simple, exciting, and lucrative for all
          players, whether it's through daily drawings or large prizes.
        </p>
      </div>
    </div>
  );
}

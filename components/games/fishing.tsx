import Image from "next/image";
import Link from "next/link";

export default function Fishing() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md my-2 md:my-4">
      <div className="border-b-2 border-[#8F92B0] pb-2 mb-2 md:pb-3 md:mb-4">
        <h3 className="text-md uppercase md:font-[800] md:text-xl">
          Fishing Games: The Catch's Thrill
        </h3>
      </div>
      <div className="text-justify md:text-left">
        <p className="mb-2 md:mb-4">
          Offering a welcome diversion from conventional casino games, fishing
          games have been especially popular in the realm of online casinos. A
          selection of fishing games available from Panalobet provides a fresh
          degree of thrills and chances for large payouts. As users employ
          virtual fishing rods to capture different kinds of fish, these games
          mix strategy, skill, and luck. Every fish caught might have distinct
          benefits; larger and rarer fish can pay more.
        </p>
        <p className="mb-2 md:mb-4">
          The range of unique characteristics fishing games provide adds even
          more excitement. Numerous fishing games have multipliers, extra
          rounds, and power-ups meant to improve gameplay and raise winning
          possibilities. Fishing games at Panalobet offer a fun and rewarding
          experience that is both relaxing and exciting at the same time
          regardless of your level of knowledge.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 md:flex-row md:items-stretch">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_Fishing/parent-fishing.webp"
            alt="Fishing"
            width={300}
            height={300}
          />
        </div>
        <div className="flex items-stretch flex-col md:gap-4 ">
          <div className="grid grid-cols-2 gap-4 md:self-start lg:grid-cols-4">
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Fishing/fishing-all-star fishing.webp"
                alt="Fishing all star"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Fishing/fishing-bombing fishing.webp"
                alt="Fishing bombing"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Fishing/fishing-fortune king jackpot.webp"
                alt="Fishing Fortune King Jockpot"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Fishing/fishing-happy fishing.webp"
                alt="Fishing Happy"
                width={180}
                height={180}
              />
            </div>
          </div>
          <div className="text-center mt-5 md:mt-5">
            <Link
              href="#"
              className="bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] rounded-md uppercase shadow-md font-bold p-2 md:px-4 md:py-2"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

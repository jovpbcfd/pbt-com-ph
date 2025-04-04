import Image from "next/image";
import Link from "next/link";

export default function Sports() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md my-2 md:my-4">
      <div className="border-b-2 border-[#8F92B0] pb-2 mb-2 md:pb-3 md:mb-4">
        <h3 className="text-md uppercase md:font-[800] md:text-xl">
          Sports Betting: Support Your Preferred Teams
        </h3>
      </div>
      <div className="text-justify md:text-left">
        <p className="mb-2 md:mb-4">
          Panalobet provides more than only casino games. We offer sports lovers
          a large sports betting platform so they may gamble on events
          worldwide. Panalobet has you covered whether your preferred sports are
          football, basketball, tennis, or another game. Sports betting has
          never been simpler or more interesting with a variety of betting
          choices for big events, leagues, and contests.
        </p>
        <p className="mb-2 md:mb-4">
          Making a sports bet is easy: pick your sport, decide on an event, then
          choose the result you think would happen. To make wise wagers, though,
          one must know the odds and how they operate. Panalobet improves your
          whole betting experience by giving thorough information to enable you
          to make wiser judgments.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 md:flex-row md:items-stretch">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_Sports/parent-sports.webp"
            alt="Sports"
            width={300}
            height={300}
          />
        </div>
        <div className="flex items-stretch flex-col md:gap-4 ">
          <div className="grid grid-cols-2 gap-4 md:self-start lg:grid-cols-4">
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Sports/sports- basketball.webp"
                alt="Sports Basketball"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Sports/sports- esport.webp"
                alt="Sports Esports"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Sports/sports- IM esport.webp"
                alt="Sports IM Esports"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Sports/sports- soccer.webp"
                alt="Sports Soccer"
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

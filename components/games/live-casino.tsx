import Image from "next/image";
import Link from "next/link";

export default function LiveCasino() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md my-2 md:my-4">
      <div className="border-b-2 border-[#8F92B0] pb-2 mb-2 md:pb-3 md:mb-4">
        <h3 className="text-md uppercase md:font-[800] md:text-xl">
          Live Casino: The Peak Real-World Experience
        </h3>
      </div>
      <div className="text-justify md:text-left">
        <p className="mb-2 md:mb-4">
          Our live casino division is ideal for those looking for the most real
          and engaging gaming experience. With Panalobet's live casino, you
          might get real-time games broadcast from top-notch studios coupled
          with expert dealers guiding you through every round.From blackjack,
          roulette, baccarat, and poker, the live casino provides all the
          traditional table games you could rapidly interact with the dealer and
          other players from.
        </p>
        <p className="mb-2 md:mb-4">
          Even while their policies are the same as those of their land-based
          counterparts, the real-time aspect of live casino games offers a
          special and fascinating experience. Whether your taste is for the
          fast-paced action of live blackjack or the exhilaration of a roulette
          wheel spinning, the live casino section of Panalobet puts the casino
          right into your living room.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 md:flex-row md:items-stretch">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_Live Casino/parent-live casino.webp"
            alt="Live Casino"
            width={300}
            height={300}
          />
        </div>
        <div className="flex items-stretch flex-col md:gap-4 ">
          <div className="grid grid-cols-2 gap-4 md:self-start lg:grid-cols-4">
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Live Casino/live-blackjack.webp"
                alt="Live blackjack"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Live Casino/live-fortune roulette.webp"
                alt="Live Fortune Roulette"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Live Casino/live-sicbac.webp"
                alt="Live Sicbac"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Live Casino/live-vegas ball bonanza.webp"
                alt="Live Vegas Ball"
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

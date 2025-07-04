import Image from "next/image";

export default function LiveCasinoV2() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md">
      <div className="flex justify-center items-center lg:mb-2">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_Live Casino/parent-live casino.webp"
            alt="Live Casino"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="pb-2 mb-2 md:pb-3 md:mb-4">
        <div className="border-b-[1px] border-[#8F92B0] pb-2">
          <h3 className="text-md uppercase text-center md:font-[800] md:text-xl">
            Casino Live
          </h3>
        </div>
        <p className="mb-2 text-justify md:text-center md:my-4">
          Enter the Panalobet Live Casino and start betting in real time. All
          are played by skilled pros who play well-known casino games like
          baccarat, roulette, and blackjack. Enjoy a real casino experience
          without any interruptions while playing with other people. Our live
          casino is Panalobet's version of Las Vegas, available to you at all
          times.
        </p>
      </div>
    </div>
  );
}

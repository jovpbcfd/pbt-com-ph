import Image from "next/image";

export default function ArcadeV2() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md">
      <div className="flex justify-center items-center lg:mb-2">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_Sports/parent-sports.webp"
            alt="Sports"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="pb-2 mb-2 md:pb-3 md:mb-4">
        <div className="border-b-[1px] border-[#8F92B0] pb-2">
          <h3 className="text-md uppercase text-center md:font-[800] md:text-xl">
            The Arcade
          </h3>
        </div>
        <p className="mb-2 text-justify md:text-center md:my-4">
          You may rediscover the nostalgia of vintage arcade games at
          Panalobet's arcade area. For gamers of all ages, our arcade offers
          entertaining, eccentric games and action-packed challenges. Join this
          vibrant gaming community and enjoy an exciting gaming spree with
          unique incentives and features.
        </p>
      </div>
    </div>
  );
}

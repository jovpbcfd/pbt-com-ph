import Image from "next/image";

export default function FishingV2() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md">
      <div className="flex justify-center items-center lg:mb-2">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_Fishing/parent-fishing.webp"
            alt="Fishing"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="pb-2 mb-2 md:pb-3 md:mb-4">
        <div className="border-b-[1px] border-[#8F92B0] pb-2">
          <h3 className="text-md uppercase text-center md:font-[800] md:text-xl">
            Games for Fishing
          </h3>
        </div>
        <p className="mb-2 text-justify  md:text-center md:my-4">
          Panalobet offers fast-paced fishing games that combine enjoyment and
          skill. As you shoot targets and explore colorful underwater
          landscapes, you can collect points and win big. Our fishing games,
          which have amazing graphics and challenging obstacles for constant
          action and rewards, are ideal for both casual and thrill-seeking
          players.
        </p>
      </div>
    </div>
  );
}

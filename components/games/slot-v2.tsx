import Image from "next/image";

export default function SlotV2() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md">
      <div className="flex justify-center items-center lg:mb-2">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_slots/parent-slots.webp"
            alt="Slots"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="pb-2 mb-2 md:pb-3 md:mb-4">
        <div className="border-b-[1px] border-[#8F92B0] pb-2">
          <h3 className="text-md uppercase text-center md:font-[800] md:text-xl">
            Slots Games: An Excite World of Diversity
          </h3>
        </div>
        <p className="mb-2 text-justify md:text-center md:my-4">
          The slot games that Panalobet offers range in subject from traditional
          reels to contemporary experiences to help people deal with these
          incredible features. Every kind of player will be delighted by our
          slots, which are loaded with thrilling features, progressive jackpots,
          and free spins. The slot games at Panalobet provide a sense of
          excitement with every spin, regardless of whether you're looking for
          big prizes or are simply enjoying the bright visuals.
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Slots() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md my-2 md:my-4">
      <div className="border-b-2 border-[#8F92B0] pb-2 mb-2 md:pb-3 md:mb-4">
        <h3 className="text-md uppercase md:font-[800] md:text-xl">
          Slots Games: An Excite World of Diversity
        </h3>
      </div>
      <div className="text-justify md:text-left">
        <p className="mb-2 md:mb-4">
          Any online casino's soul is its slot games, hence Panalobet is no
          exception. Our selection of slot games is vast and each one is meant
          to provide a different and interesting experience. Excellent graphics,
          engrossing themes, and interesting added features in our games will
          enthrall players and keep them returning. Working with top game
          creators like Microgaming, Playtech, and NetEnt, Panalobet guarantees
          that our slots are of the best quality and feature anything from
          future adventures to old tales.
        </p>
        <p className="mb-2 md:mb-4">
          Our slots provide players several possibilities to win since their
          paylines are rather flexible. From a few to several hundred, paylines
          provide players various chances to strike winning combinations. Many
          of our slot games also feature bonus rounds meant to increase your
          profits and special symbols including wilds, scatters, and
          multipliers. Panalobet's range is meant to satisfy every player's
          needs, regardless of whether your taste is for sophisticated video
          slots with creative mechanics or old fruit machines.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 md:flex-row md:items-stretch">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_slots/parent-slots.webp"
            alt="Slots"
            width={300}
            height={300}
          />
        </div>
        <div className="flex items-stretch flex-col md:gap-4 ">
          <div className="grid grid-cols-2 gap-4 md:self-start lg:grid-cols-4">
            <div className="flex items-center justify-center rounded-md lg:w-[180px] lg:h-[180px]">
              <Image
                src="/img/Game_slots/slot- crazy hunter.webp"
                alt="Slots Crazy hunter"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_slots/slot-777.webp"
                alt="Slots 777"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_slots/slot-candy baby.webp"
                alt="Slot candy baby"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_slots/slot-charge buffalo.webp"
                alt="Slot charge buffalo"
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

import SlotV2 from "./games/slot-v2";
import LiveCasinoV2 from "./games/live-casino-v2";
import CardGameV2 from "./games/card-game-v2";
import FishingV2 from "./games/fishing-v2";
import ArcadeV2 from "./games/arcade-v2";

export default function GamingOptions() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="md:mt-10">
        <h2 className="font-[900] text-lg md:text-xl lg:text-2xl">
          Especially for You, Panalobet offers you Unlimited Gaming Options
          turned upside down!
        </h2>
        <p className="mb-2 md:my-4">
          Panalobet is offering a wide range of games that will please and
          delude you, from countless entertainment to number of gaming options
          it provides. Well, Panalobet features classic casino games, adrenaline
          pumping sports betting and incredibly cool fishing games. Have the
          heart of Sabong, experience the channel of slot games with specific
          themes, and bide your time for games of the mind like the games of
          stragery such as poker and baccarat.
        </p>
        <p className="mb-2 md:my-4">
          Regardless of whether you are a casual player or a hardcore gamer, our
          platform is understandable, easy to find your way through and user
          friendly. To be honest you will be able to switch smoothly between
          games with Panalobet. Plus there are special bonus and promotions
          which you get and more you can win when playing. Panalobet is always
          waiting to make unforgettable stays until you find what you are
          looking for, variety, quality and entertainment is simply unique. Sign
          up now and games await you without limits!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <SlotV2 />
        <LiveCasinoV2 />
        <FishingV2 />
        <ArcadeV2 />
      </div>
      <CardGameV2 />
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function CardGames() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md my-2 md:my-4">
      <div className="border-b-2 border-[#8F92B0] pb-2 mb-2 md:pb-3 md:mb-4">
        <h3 className="text-md uppercase md:font-[800] md:text-xl">
          Card Games: Where Skill Meets Strategy
        </h3>
      </div>
      <div className="text-justify md:text-left">
        <p className="mb-2 md:mb-4">
          For those who like employing strategy and expertise to edge their
          opponent, card games are the ideal fit. With a large selection of card
          games including poker and player-versus-player (PVP) games, which let
          you challenge your skills against others, Panalobet provides These
          games demand a combination of strategic thinking, psychology, and
          calculated risk-taking, which gives a degree of thrill and complexity
          absent from some other games.
        </p>
        <p className="mb-2 md:mb-4">
          Panalobet's card games are meant to provide excellent action whether
          you're playing a classic game of poker or fighting other players in a
          PVP match. Every game has different rules and modifications, hence
          before jumping in, you need to become familiar with the particular
          details.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 md:flex-row md:items-stretch">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_Cards/parent-card games.webp"
            alt="Card Games"
            width={300}
            height={300}
          />
        </div>
        <div className="flex items-stretch flex-col md:gap-4 ">
          <div className="grid grid-cols-2 gap-4 md:self-start lg:grid-cols-4">
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Cards/card-blackjack lucky ladies.webp"
                alt="Card Black Jack lucky ladies"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Cards/card-caribbean.webp"
                alt="Card Caribbean stud poker"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Cards/card-mini flush.webp"
                alt="Card Mini Flush"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Cards/card-pusoy go.webp"
                alt="Card Pusoy go"
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

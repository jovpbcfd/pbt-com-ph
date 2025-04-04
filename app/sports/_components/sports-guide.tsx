import Link from "next/link";
import Image from "next/image";

export default function SportsGuide() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-16">
        <h1 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase md:mb-2 md:flex-row md:text-xl lg:text-2xl">
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
          <span className="text-center md:w-[50%] md:px-2">
            The Ultimate Guide to Sports Betting: A Universe of Thrills and
            Strategic Possibilities by Panalobet
          </span>
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
        </h1>
        <div className="mt-5 text-justify md:text-left">
          <p className="mb-2 md:mb-4">
            Sports betting has become somewhat popular recently, thanks to an
            amazing explosion. This increase represents a revolution
            transforming our interaction with and enjoyment of sports, not only
            a trend. The ability to include a strategic prediction aspect into
            the excitement of a game not only improves the thrills but also
            changes the whole sports devotee experience. Millions of sports fans
            worldwide have naturally welcomed internet betting as a means of
            closer connection with their preferred games, teams, and athletes.
            Here at Panalobet, we offer an exciting venue that pushes sports
            betting forward. Our platform provides a wide spectrum of betting
            choices for all of your preferred sports, therefore enabling you to
            make wise judgments and to place confident bets.
          </p>
          <p className="mb-2 md:mb-4">
            This thorough tutorial will take you on an in-depth tour of the
            world of sports betting at Panalobet, investigate the several kinds
            of bets you could make, and offer insightful analysis to help you
            raise your chances of winning. Panalobet is the place where you can
            improve your sports betting experience regardless of your level of
            experience—from a rookie wishing to learn the rules to a seasoned
            bettor searching for more tactics.
          </p>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4 md:mb-8 md:flex-row">
          <div className="w-full self-center flex items-center justify-center rounded-md md:w-[373px] md:h-[373px]">
            <Image
              src="/img/Game_Sports/parent-sports.webp"
              alt="Sports"
              width={373}
              height={373}
            />
          </div>
          <div>
            <h2 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase my-2 md:mt-5 md:mb-0 md:flex-row md:text-xl lg:text-2xl">
              <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
              <span className="text-center md:whitespace-nowrap md:px-2">
                Why Sporting Betting Has Become So Popular
              </span>
              <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px]">
                <Image
                  src="/img/Game_Sports/sports- basketball.webp"
                  alt="Sports Basketball"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px]">
                <Image
                  src="/img/Game_Sports/sports- esport.webp"
                  alt="Sports Esports"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px]">
                <Image
                  src="/img/Game_Sports/sports- IM esport.webp"
                  alt="Sports IM Esports"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex items-center justify-center rounded-md md:w-[200px] md:h-[200px]">
                <Image
                  src="/img/Game_Sports/sports- soccer.webp"
                  alt="Sports Soccer"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-5 md:mt-0">
              <Link
                href="#"
                className="bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] px-4 py-2 rounded shadow-md text-center
                    transition-transform transform hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300
                    md:w-[150px]
                    "
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <div className="text-justify text-left">
            <p className="mb-2 md:my-4">
              Unquestionably popular worldwide and only getting more so is
              sports betting. Industry study estimates that the worldwide sports
              betting market was worth $85.047 billion in 2017 and that by 2024
              it might reach as high as $155.49 billion. Advancements in
              technology, the spread of online betting platforms, and the
              growing acceptance of sports betting in many different countries
              all help to explain this rise. For players all around, these
              elements have made sports betting more safe, fun, and accessible.
            </p>
            <p className="mb-2 md:my-4">
              Sports betting emergence in the Philippines has reflected the
              worldwide pattern. The Philippines has grown to be a major market
              for online sports betting due to its high population of ardent
              sports fans and rising curiosity in gaming. With reliable sites
              like Panalobet, Filipino sports enthusiasts can easily and safely
              bet on their preferred sports and teams. The mix of fascinating
              gameplay, improved technology, and the possibility to gamble on a
              great range of sports helps to explain this explosion in
              popularity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

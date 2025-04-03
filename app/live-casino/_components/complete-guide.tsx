import Link from "next/link";

export default function CompleteGuide() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-16">
        <h1 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase md:mb-2 md:flex-row md:text-xl lg:text-2xl">
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
          <span className="text-center md:px-2">
            The Complete Guide on Live Casino at Panalobet
          </span>
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
        </h1>
        <div>
          <p className="mb-2 md:mb-4">
            Online gaming has developed into a vibrant, fast expanding sector
            that is always developing to provide players all around interesting
            and immersive experiences. Live casino games represent one of the
            most important changes occurring in the gaming scene. These games
            combine the best features of physical casinos with the simplicity
            and availability of the internet world, therefore bringing the
            excitement of classic casinos right into the homes of players.
            Rising as a top platform in this fascinating industry, Panalobet
            provides players with an outstanding live casino experience that is
            both entertaining and profitable. Panalobet's live casino features
            something for everyone, regardless of experience level or beginner
            trying their hand at the tables.
          </p>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4 md:mb-8 md:flex-row">
          <div className="w-full self-center border-1 border-dashed flex items-center justify-center rounded-md md:w-[373px] md:h-[373px]">
            Image
          </div>
          <div>
            <h2 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase my-2 md:mt-5 md:mb-8 md:flex-row md:text-xl lg:text-2xl">
              <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
              <span className="text-center md:whitespace-nowrap md:px-2">
                Live Casino Games: Their Allure
              </span>
              <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border-1 border-dashed flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                Image
              </div>
              <div className="border-1 border-dashed flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                Image
              </div>
              <div className="border-1 border-dashed flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                Image
              </div>
              <div className="border-1 border-dashed flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
                Image
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-2 md:mt-8">
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
        <div>
          <div>
            <p className="mb-2 md:my-4">
              The best combination of real-world excitement from a
              brick-and-mortar casino with internet ease are live casino games.
              Live casino games are aired in real-time and contain real-time
              actual human dealers unlike conventional online casino games that
              rely on random number generators (RNGs) to choose results. Since
              the user may interact with the dealers and other players,
              therefore creating an environment quite similar to that of a
              conventional casino and giving the user a more real gaming
              experience.
            </p>
            <p className="mb-2 md:my-4">
              Live casino games appeal mostly to people because of their
              combination of convenience and realism. Although they can engage
              in top-notch, real-time games right from their homes, players
              still experience the excitement and adrenaline of a land-based
              casino. One of the most often used and fun forms of online gaming
              nowadays is the opportunity to speak with live dealers and connect
              with fellow players, which adds still another level of social
              involvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

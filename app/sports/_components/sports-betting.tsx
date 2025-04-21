import Image from "next/image";

export default function SportsBetting() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          Conventional vs Internet Sports Betting
        </h2>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full lg:w-[70%]">
            <p className="mb-2 md:my-4">
              Accessibility is the main distinction between online and
              traditional sports betting. Traditionally, bettors in traditional
              sports betting would have to visit a physical sportsbook or
              casino, which frequently restricted their options for betting on
              several events. Placing wagers from home or on the fly is now
              simpler than ever as internet sports betting has grown.
            </p>
            <p className="mb-2 md:my-4">
              Like Panalobet, online sports betting sites provide a lot of
              advantages:
            </p>
            <div>
              <ul className="list-disc pl-15 md:pl-10">
                <li>
                  <p className="mb-2 md:my-4">
                    Convenience: Bet from anywhere, at any moment using your
                    iPad, smartphone, or computer.
                  </p>
                </li>
                <li>
                  <p className="mb-2 md:my-4">
                    Take advantage of a larger range of sports, leagues, and
                    events for betting.
                  </p>
                </li>
                <li>
                  <p className="mb-2 md:my-4">
                    Online sportsbooks usually provide loyalty benefits,
                    bonuses, and promotions not seen in traditional betting
                    venues.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex items-center justify-center rounded-md lg:w-[300px] lg:h-[300px]">
            <Image
              src="/img/Game_Sports/3. Conventional vs Internet Sports Betting.webp"
              width={300}
              height={300}
              alt="Conventional vs Internet Sports Betting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

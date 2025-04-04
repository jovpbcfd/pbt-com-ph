import Image from "next/image";

export default function Promotions() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="md:mt-10">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          Panalobet Promotions: Improving Your Gaming Enjoyment
        </h2>
        <p className="my-2 md:my-4">
          We at Panalobet appreciate our gamers and are dedicated to providing
          them with the greatest gaming experience available. To help you spend
          more time on the site, we thus provide a large spectrum of incentives,
          bonuses, and discounts. Whether you are a novice player or an
          experienced one, you will find interesting offers meant to raise your
          chances of winning.
        </p>
        <div className="grid grid-cols-1 gap-2 mt-4 md:mt-10 md:gap-4 md:grid-cols-2">
          <div className="text-center bg-[#252B73] rounded-md md:p-6">
            <div className="mb-2 md:mb-6">
              <div className="flex items-center justify-center rounded-md mx-auto md:w-[300px] md:h-[300px]">
                <Image
                  src="/img/Promotions/Good Bonus .webp"
                  width={300}
                  height={300}
                  alt="Good bonus"
                />
              </div>
              <h3 className="text-md uppercase md:font-[800] mt-2 md:text-xl md:mt-6">
                Good Bonus
              </h3>
            </div>
            <div className="mt-2 text-justify">
              <p className="mb-2 p-2">
                We want to welcome you kindly with a big bonus when you
                initially join Panalobet. Our welcome bonus is meant to provide
                you a boost right from the start so you may browse our platform
                and try your hand at several games with extra money.
              </p>
            </div>
          </div>
          <div className="text-center bg-[#252B73] rounded-md md:p-6">
            <div className="mb-2 md:mb-6">
              <div className="flex items-center justify-center rounded-md mx-auto md:w-[300px] md:h-[300px]">
                <Image
                  src="/img/Promotions/Cashback Promises.webp"
                  width={300}
                  height={300}
                  alt="Cashback"
                />
              </div>
              <h3 className="text-md uppercase md:font-[800] mt-2 md:text-xl md:mt-6">
                Cashback Promises
              </h3>
            </div>
            <div className="mt-2 text-justify">
              <p className="mb-2 p-2">
                Although losing can be annoying, we think you deserve a second
                shot. Our cashback offers let you recoup some losses, thereby
                enabling you to play longer and with greater confidence.
              </p>
            </div>
          </div>
          <div className="text-center bg-[#252B73] rounded-md md:p-6">
            <div className="mb-2 md:mb-6">
              <div className="flex items-center justify-center rounded-md mx-auto md:w-[300px] md:h-[300px]">
                <Image
                  src="/img/Promotions/Daily Checks-In.webp"
                  width={300}
                  height={300}
                  alt="Daily Check In"
                />
              </div>
              <h3 className="text-md uppercase md:font-[800] mt-2 md:text-xl md:mt-6">
                Daily Checks-In
              </h3>
            </div>
            <div className="mt-2 text-justify">
              <p className="mb-2 p-2">
                We value our devoted players and will pay daily check-in bonuses
                to them. Every day log-in to your Panalobet account to claim
                bonuses, free spins, and other great prizes.
              </p>
            </div>
          </div>
          <div className="text-center bg-[#252B73] rounded-md md:p-6">
            <div className="mb-2 md:mb-6">
              <div className="flex items-center justify-center rounded-md mx-auto md:w-[300px] md:h-[300px]">
                <Image
                  src="/img/Promotions/Spin the Wheel for Points.webp"
                  width={300}
                  height={300}
                  alt="Spin the wheel"
                />
              </div>
              <h3 className="text-md uppercase md:font-[800] mt-2 md:text-xl md:mt-6">
                Spin the Wheel for Points
              </h3>
            </div>
            <div className="mt-2 text-justify">
              <p className="mb-2 p-2">
                Apart from daily bonuses, Panalobet gives the opportunity to
                spin the wheel for extra points, which can be redeemed for a
                range of fantastic prizes like free spins, bonuses, and even
                cash awards.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[607px] w-full mx-auto text-center bg-[#252B73] mx-auto rounded-md mt-4 md:p-6">
          <div className="mb-2 md:mb-6">
            <div className="flex items-center justify-center rounded-md mx-auto md:w-[300px] md:h-[300px]">
              <Image
                src="/img/Promotions/Holidays and Special Event Promos.webp"
                width={300}
                height={300}
                alt="Secial Event"
              />
            </div>
            <h3 className="text-md uppercase md:font-[800] mt-2 md:text-xl md:mt-6">
              Holidays and Special Event Promos
            </h3>
          </div>
          <div className="mt-2 text-justify">
            <p className="mb-2 p-2">
              We run special offers for holidays, celebrations, birthdays, and
              other fantastic events all year long. These limited-time offers
              give gamers a chance to pick unique perks and incentives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

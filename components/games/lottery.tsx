import Image from "next/image";
import Link from "next/link";

export default function Lottery() {
  return (
    <div className="bg-[#252B73] p-4 rounded-md my-2 md:my-4">
      <div className="border-b-2 border-[#8F92B0] pb-2 mb-2 md:pb-3 md:mb-4">
        <h3 className="text-md uppercase md:font-[800] md:text-xl">
          Lottery: Your Probability of Winning Big
        </h3>
      </div>
      <div className="text-justify md:text-left">
        <p className="mb-2 md:mb-4">
          Our lottery games present a great chance to strike a huge jackpot if
          you're seeking a life-changing victory. There are lotteries at
          Panalobet from all throughout the world, each with unique reward
          systems and rules. Lottery games have as their fundamental concept
          choosing the correct combination of numbers and matching them with the
          numbers obtained during the lottery drawing.
        </p>
        <p className="mb-2 md:mb-4">
          With the possibility to win significant sums of money, lottery games
          are a great and simple approach to take part in a worldwide gaming
          experience. Every lottery's results are shown right on our website;
          any wins are promptly credited to your account, guaranteeing a
          flawless and hassle-free transaction.
        </p>
        <p className="mb-2 md:mb-4">
          At Panalobet, we think that great online gaming ought to mix security,
          creativity, and consumer happiness. One of the top online casinos in
          the Philippines, Panalobet has always worked to provide users with a
          safe, fun, and profitable gaming environment. Our staff has worked
          nonstop over years to improve every element of our platform so that
          every feature satisfies a different demand for our users. From our
          industry-leading customer service to our vast gaming collection,
          Panalobet is dedicated to offer a world-class experience. We explore
          in this part the special and remarkable qualities that distinguish
          Panalobet from the competitors, guaranteeing our gamers a flawless,
          safe, and interesting trip with us.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 md:flex-row md:items-stretch">
        <div className="flex items-center justify-center rounded-md w-[180px] h-[180px] md:w-[300px] md:h-[300px]">
          <Image
            src="/img/Game_Lottery/parent-lottery.webp"
            alt="Lottery"
            width={300}
            height={300}
          />
        </div>
        <div className="flex items-stretch flex-col md:gap-4 ">
          <div className="grid grid-cols-2 gap-4 md:self-start lg:grid-cols-4">
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Lottery/lottery-bingo adventure golden.webp"
                alt="Lottery Adventure golden"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Lottery/lottery-bingo carnaval.webp"
                alt="Lottery Bingo carnaval"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Lottery/lottery-calaca bingo.webp"
                alt="Lottery Calaca Bingo"
                width={180}
                height={180}
              />
            </div>
            <div className="flex items-center justify-center rounded-md md:w-[180px] md:h-[180px]">
              <Image
                src="/img/Game_Lottery/lottery-candyland bingo.webp"
                alt="Lottery Candy Land Bingo"
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

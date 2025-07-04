import Image from "next/image";

export default function Welcome() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:my-4">
        <h1 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase md:mb-2 md:flex-row md:text-xl lg:mb-5 lg:text-2xl">
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
          <span className="text-center md:whitespace-nowrap md:px-2">
            Panalobet Welcomes You to the Best Gaming Experience with Bonuses!
          </span>
          <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
        </h1>
        <div className="flex items-center flex-col-reverse gap-2 md:flex-row">
          <div className="w-full text-justify md:text-left md:w-[50%]">
            <p className="mb-2 md:mb-4 lg:mb-5">
              Explore Panalobet to experience the greatest gaming spot that
              gives you thrilling rewards as you play. The time has arrived for
              you to become part of our community where exclusive bonuses
              provide better results in your experience. Panalobet offers its
              users complete access to live casino games and slots, Sabong,
              alongside fishing games.
            </p>
            <h2 className="uppercase font-[900] md:mb-2 lg:text-xl">
              Panalobet Login and Enjoy a Free Welcome Bonus!
            </h2>
            <p className="mb-2 md:mb-4">
              The opening welcome promotions offered at Panalobet provide you
              with enhanced opportunities to play and boost your opportunity to
              win major prizes. Panalobet delivers exciting gaming experiences
              along with distinctive prize possibilities which offer big
              winnings to its players. Experience Panalobet now to understand
              why it maintains its position as the favored gaming site among our
              users. Players aiming to experience the top gaming entertainment
              can quickly access these features through an online interface.
            </p>
            {/* <p className="mb-2 md:mb-4">
              New to Panalobet? The Panalobet Free 100 bonus serves as a
              privileged offer to assist your initial gaming start. Take
              advantage of the current offer by signing up today to access
              various games. Wins of significance do not come to those who stand
              by. Therefore, act immediately. Three steps for join us:
            </p> */}
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center md:w-[400px] md:h-[400px] md:ml-26 md:rounded-md">
            <Image
              src="/img/welcome-games/Main-Welcome to Panalobet_The Premier Location for Online Gaming Superiority.webp"
              width={400}
              height={400}
              alt="Welcome Panalobet"
            />
          </div>
        </div>
        {/* <div>
          <h2 className="flex items-center w-full gap-2 text-lg flex-col font-[900] uppercase md:my-4 md:flex-row md:text-xl lg:text-2xl">
            <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
            <span className="text-center md:whitespace-nowrap md:px-2">
              Beginning Panalobet
            </span>
            <div className="h-[1px] bg-[#8F92B0] flex-grow hidden sm:block"></div>
          </h2>
          <div className="text-justify md:text-left">
            <p className="mb-2 md:mb-4">
              Integrating Panalobet is simple. All you have to do is register on
              our website to be instantly linked to a universe full of
              fascinating gaming choices. A kind incentive meant to improve your
              initial gaming experience will welcome you as a new member. This
              bonus increases your possibilities to explore all the several
              games we provide and optimize your enjoyment straight from the
              beginning.
            </p>
            <p className="mb-2 md:mb-4">
              At Panalobet, we are dedicated to creating an ethical gambling
              space. Every player should have an amazing time, and we also want
              to make sure they grasp the risks involved in gambling. Our
              platform gives tools to assist with any issues about gaming
              behavior and motivates participants to play properly.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

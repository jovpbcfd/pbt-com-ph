import Image from "next/image";

export default function Promotions() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="md:mt-10">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          How to Join the Promotions.
        </h2>
        <p className="my-2 md:my-4">
          Panalobet promotions offer your ultimate chance to obtain exceptional
          prizes while developing an immersive gaming adventure. The promotional
          programs here give you more enjoyment and added value no matter how
          experienced you are with the platform or new to it. The following easy
          instructions help you maximize these outstanding offers. The following
          instructions provide everything needed to begin.
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
                1. Start. User account holders should select Login while new
                members should pick Create to proceed.
              </h3>
            </div>
            <div className="mt-2 text-justify">
              <h4 className="text-md text-center uppercase md:font-[700] md:text-lg md:mt-6 lg:p-2">
                Sign Up Quickly and Securely
              </h4>
              <p className="mb-2 p-2">
                Account creation at Panalobet serves as the requirement for
                participating in promotional activities. New users can easily
                join the platform during their registration process. Users can
                begin with minimal requirements such as entering their details
                followed by account verification to start using the service.
                From Panalobet Free 100 you will receive an exciting bonus that
                gives your journey an early start. Claim this offer immediately
                to access numerous games. Registered users who access the
                application will find available promotions.
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
                2. Users can access promotions by reading the section or
                exploring it.
              </h3>
            </div>
            <div className="mt-2 text-justify">
              <h4 className="text-md text-center uppercase md:font-[700] md:text-lg md:mt-6 lg:p-2">
                Get the Latest offers updated.
              </h4>
              <p className="mb-2 p-2">
                You can find the current promotions either on the website in its
                "Promotions" section or inside the mobile application of
                Panalobet. You can find various stimulating bonus options at
                this spot such as welcome packages along with cashback discounts
                and one-time event rewards. Each offer contains specific terms
                and conditions which can be found by reading them completely to
                determine your eligibility.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[607px] w-full mx-auto text-center bg-[#252B73] mx-auto rounded-md mt-4 md:p-6">
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
              3. Opt-In and Start Playing
            </h3>
          </div>
          <div className="mt-2 text-justify">
            <h4 className="text-md text-center uppercase md:font-[700] md:text-lg md:mt-6 lg:p-2">
              Activate and Enjoy Rewards
            </h4>
            <p className="mb-2 p-2">
              All promotional activities need participants to perform either
              button clicking or code entry. Participating in specific offers
              could require a minimum required deposit amount or selected amount
              of gameplay before activation occurs. Playing available games
              commences after opting into rewards programs that offer bonus
              credits and free spins resulting in cashback payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

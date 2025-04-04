import Link from "next/link";
import Image from "next/image";

export default function RegisterAccount() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="md:mt-10">
        <h2 className="font-[900] text-lg md:text-xl lg:text-2xl">
          Register an Account and Play at Panalobet Now!
        </h2>
        <p className="mb-2 md:my-4">
          Ready to join the fun? Register today at Panalobet and unlock a world
          of thrilling casino games, generous bonuses, and exciting promotions!
          Whether you’re a seasoned player or new to the world of online
          casinos, we have something for everyone.
        </p>
        <p className="mb-2 md:my-4">
          By signing up with Panalobet, you will gain access to:
        </p>
        <div className="flex">
          <div className="w-full self-center flex items-center justify-center rounded-md md:w-[356px] md:h-[356px]">
            <Image
              src="/img/Register-account/Register an Account and Play at Panalobet Now.webp"
              width={356}
              height={356}
              alt="Register an Account"
            />
          </div>
          <div className="self-center">
            <ul className="list-disc md:my-4 md:pl-16">
              <li>
                <span className="font-[900]">
                  A wide variety of casino games:
                </span>{" "}
                From slots to table games, poker, and live dealer options.
              </li>
              <li>
                <span className="font-[900]">
                  Exclusive bonuses and promotions:
                </span>{" "}
                Start your journey with a generous welcome bonus, and keep
                enjoying rewards throughout your gaming experience.
              </li>
              <li>
                <span className="font-[900]">24/7 customer support:</span> Our
                team is always available to assist with any inquiries or issues
                you may encounter.
              </li>
              <li>
                <span className="font-[900]">
                  A secure and reliable platform:
                </span>{" "}
                We prioritize your safety, ensuring that your data and
                transactions are protected at all times.
              </li>
            </ul>
            <div className="flex items-center justify-center gap-2 md:gap-4 md:mx-16">
              <Link
                href="#"
                className="p-4 bg-[linear-gradient(135deg,#1f2460_0%,#005fbe_50%,#1f2460_100%)] text-center rounded-md
                            transition-transform transform hover:scale-105 hover:bg-[linear-gradient(135deg,#005fbe_0%,#1f2460_50%,#005fbe_100%)] duration-300
                            md:w-[200px]"
              >
                Login
              </Link>
              <Link
                href="#"
                className="p-4 bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] text-center rounded-md 
                            transition-transform transform hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300
                            md:w-[200px]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        <p className="my-2 md:my-8">
          Don't wait any longer—sign up now, claim your welcome bonus, and start
          your exciting gaming adventure at Panalobet today!
        </p>
      </div>
    </section>
  );
}

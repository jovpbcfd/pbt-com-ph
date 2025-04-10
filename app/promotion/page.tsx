import Link from "next/link";
import Image from "next/image";
import Discover from "./_components/discover";
import Awards from "./_components/awards";
import BigWinning from "./_components/winning";
import SpinWheel from "./_components/spin";
import MethodicalGuide from "./_components/methodicalGuide";
import Typical from "./_components/typical";
import TermsAndConditions from "./_components/tac";
import Conclusion from "./_components/conclusion";

export default function Page() {
  return (
    <>
      <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
        <div className="my-2 flex items-center justify-center flex-col gap-4 md:gap-8 md:my-4 lg:flex-row">
          <div>
            <div className="flex items-center md:w-[556px] md:h-[206px]">
              <Image
                src="/img/banner/promotion/image_225880.webp"
                alt="5% Reload Gcash"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:mb-4 md:text-xl">
              5% Reload Gcash
            </p>
            <div className="mt-4 flex items-center justify-center md:mt-3">
              <Link
                href="#"
                className="px-6 py-2 font-bold bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] rounded text-center transition-transform transform
              hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300 md:w-[150px]"
              >
                Register
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center md:w-[556px] md:h-[206px]">
              <Image
                src="/img/banner/promotion/image_225865.webp"
                alt="8% Reload PayMaya"
                width={556}
                height={206}
              />
            </div>
            <p className="font-bold text-center md:mb-4 md:text-xl">
              8% Reload PayMaya
            </p>
            <div className="mt-4 flex items-center justify-center md:mt-3">
              <Link
                href="#"
                className="px-6 py-2 font-bold bg-[linear-gradient(135deg,#991111_0%,#f60015_50%,#991111_100%)] rounded text-center transition-transform transform
              hover:scale-105 hover:bg-[linear-gradient(135deg,#f60015_0%,#991111_50%,#f60015_100%)] duration-300 md:w-[150px]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Discover />
      <Awards />
      <BigWinning />
      <SpinWheel />
      <MethodicalGuide />
      <Typical />
      <TermsAndConditions />
      <Conclusion />
    </>
  );
}

import Image from "next/image";

export default function SecurityAndTrust() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          Security and Trust: The Panalobet Assignment
        </h2>
        <p className="mb-2 md:my-4">
          At Panalobet, we give players confidence and the integrity of our
          games first priority. Being a top online gaming platform, our goal is
          to give every one of our users a fun, safe, and secure environment. We
          know that trust is earned in the digital environment of today rather
          than presumered. This in mind, we have committed ourselves to putting
          industry-leading technologies, top-notch security measures, and strong
          systems that give player protection first priority and support
          responsible gaming habits into use.
        </p>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full lg:w-[70%]">
            <h3 className="text-md uppercase md:font-[800] md:text-md">
              Modern Security Measures State-of-the-Art
            </h3>
            <p className="mb-2 md:my-4">
              Our operations revolve on security. Our players' personal and
              financial data is totally our first concern. Panalobet uses
              cutting-edge encryption technologies both meeting and surpassing
              industry requirements to guarantee this. SSL encryption guards all
              sensitive information—including personal data and payment
              information—such that all data passed between players and our
              platform is secret and safe.
            </p>
            <p className="mb-2 md:my-4">
              Our security systems are always changing to match newly arising
              hazards. To protect players and the integrity of the games, we
              also use modern anti-fraud tools that identify and stop any
              dubious behavior on our platform. Our aim is to provide a
              worry-free gaming environment in which players may concentrate on
              the thrill of the games free from thought for security breaches or
              dishonest behavior.
            </p>
          </div>
          <div className="w-full flex items-center justify-center rounded-md lg:w-[300px] lg:h-[300px]">
            <Image
              src="/img/Game_Cards/Modern Security Measures State-of-the-Art1.webp"
              width={300}
              height={300}
              alt="Modern Security Measures State of the Art"
            />
          </div>
        </div>
        <div>
          <h3 className="text-md uppercase md:font-[800] md:text-md">
            Fair and Clear Gaming
          </h3>
          <p className="mb-2 md:my-4">
            Our first focus is making sure every game available on our platform
            is equitable. We thus collaborate with some of the most respectable
            game developers in the market to do this. Independent third-party
            auditing firms extensively test and certify Random Number Generators
            (RNGs), which these providers utilize. This ensures that every
            result is totally random and objective, thus offering all players an
            equal playing field.
          </p>
          <p className="mb-2 md:my-4">
            Furthermore, we follow rigorous legal rules that demand openness in
            all spheres of our gaming activities. Regular audits and evaluations
            help us to make sure that every one of our games complies with the
            best criteria of fairness and integrity. We also provide easily
            available information on the house edge and the probability of every
            game so enabling players to make wise selections and play with
            confidence.
          </p>
        </div>
        <div>
          <h3 className="text-md uppercase md:font-[800] md:text-md">
            Dedication to Conscientious Gaming
          </h3>
          <p className="mb-2 md:my-4">
            At Panalobet, we think in encouraging responsible gaming and
            designing a setting where players may enjoy their experience free
            from risk. Our platform is made with several tools and features to
            assist with ethical gaming habits. Our strict age verification
            procedures guarantee that only legally aged gamers may access our
            games. This is absolutely vital to stop underage gaming and
            guarantee that our platform follows all pertinent rules and laws.
          </p>
          <p className="mb-2 md:my-4">
            We also understand that occasionally gaming becomes troublesome. We
            provide a variety of tools to enable gamers to control their
            gambling behaviors in order to handle this. To keep their gaming
            experience within their intended limitations, players can set
            session restrictions, wager limits, and customized deposit limits.
            We also give players access to self-exclusion options, which let
            them leave the platform should their gaming spiral out of hand. We
            also assist top companies in the responsible gaming sector to offer
            direction and support for people who might want it.
          </p>
        </div>
        <div>
          <h3 className="text-md uppercase md:font-[800] md:text-md">
            Our Constant Attention
          </h3>
          <p className="mb-2 md:my-4">
            Our constant dedication at Panalobet to trust, security, and safe
            gambling is We will keep funding the most recent technologies and
            keep a proactive attitude toward player safety. Our first concern is
            players' well-being, thus we are committed to provide a safe, fair,
            and entertaining surroundings where they may have fun.
          </p>
        </div>
      </div>
    </section>
  );
}

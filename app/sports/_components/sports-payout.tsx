export default function SportsPayout() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mb-4 md:mt-5">
        <h2 className="font-[900] uppercase text-lg md:text-xl lg:text-2xl">
          Understanding Payouts and Odds
        </h2>
        <p className="mb-2 md:my-4">
          The main factor deciding your potential win from your bet is the odds.
          chances show the likelihood of an outcome; higher chances indicate a
          more dangerous outcome but also more possible rewards. For instance,
          compared to a bet on the favorite, an underdog bet usually has better
          odds.
        </p>
        <p className="mb-2 md:my-4">
          There are several ways the odds are presented:
        </p>
        <div>
          <ul className="list-disc pl-15 md:pl-10">
            <li>
              <p className="mb-2 md:my-4">
                Decimal Odds: Including your original bet, the number indicates
                how much you win for every $1 wage-per. Odds of 2.00 mean, for
                instance, pay $2 for every $1 stake.
              </p>
            </li>
            <li>
              <p className="mb-2 md:my-4">
                Common in the UK, fractional oddities show the profit against
                the stake. Odds of five-one, for example, indicate you win $5
                for every $1 stake.
              </p>
            </li>
            <li>
              <p className="mb-2 md:my-4">
                Common in the United States, moneyline odds indicate the
                required wager amount to win $100 (negative) or the amount you
                would win with a $100 bet (positive).
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

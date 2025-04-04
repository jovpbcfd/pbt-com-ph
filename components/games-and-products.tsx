import Slots from "./games/slot";
import Fishing from "./games/fishing";
import LiveCasino from "./games/live-casino";
import CardGames from "./games/card-game";
import Sports from "./games/sports";
import Lottery from "./games/lottery";

export default function GamesAndProducts() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <Slots />
      <Fishing />
      <LiveCasino />
      <CardGames />
      <Sports />
      <Lottery />
    </section>
  );
}

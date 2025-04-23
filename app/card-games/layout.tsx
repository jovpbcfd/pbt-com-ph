import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore the Excites of Card Games at Panalobet",
  description:
    "Enjoy top card games at Panalobet including Blackjack, Baccarat, and Poker. Play now for real money with smooth gameplay and fast payouts.",
};

export default function CardGameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

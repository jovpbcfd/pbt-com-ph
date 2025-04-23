import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Play Online Lottery at Panalobet | BINGO 0.9% Unlimited Daily Rebate ",
  description:
    "Enjoy 0.9% unlimited daily rebate on all Bingo games at Panalobet! Play more, earn more – your winnings just got better every day!",
};

export default function LotteryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enjoy Sports Live Odds, Big Wins & Real-Time Action : Panalobet",
  description:
    "Experience top-tier sports betting at Panalobet! Enjoy live odds, in-play betting, and a wide range of sports including NBA Sports, football, tennis, and more. Try now!",
};

export default function SportsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

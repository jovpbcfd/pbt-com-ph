import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Fishing Game and Win Real Money with Every Shot! PANALOBET",
  description:
    "Experience the Panalobet Fishing Game! Aim, shoot, fun and win real money and big prizes. Easy to play, fun to win! Sign up now!",
};

export default function FishingGameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

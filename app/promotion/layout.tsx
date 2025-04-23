import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panalobet 220% Welcome Bonus,  Free Spins & Cashback Offers",
  description:
    "Unlock exciting Panalobet promotions! Get 220% welcome bonuses, free spins, cashback , and exclusive rewards. Don’t miss out—join and claim your deals today!",
};

export default function PromotionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

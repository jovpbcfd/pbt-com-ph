import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slot Game Progressive Deposit P20, P40, P60 : PANALOBET",
  description: `Go to the Panalobet Deposit Page and select "Progressive Deposit P20, P40, P60" while making your 1st, 2nd, and 3rd deposits. By participating in this promotion, you can get up to P120 bonus every day. Hurry up!`,
};

export default function SlotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

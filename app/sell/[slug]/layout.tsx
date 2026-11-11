const staticSellRoutes = [
  "phones",
  "tablets",
  "watches",
  "macs",
  "consoles",
  "iphone-17",
];

export const dynamicParams = false;

export function generateStaticParams() {
  return staticSellRoutes.map((slug) => ({ slug }));
}

export default function SellLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

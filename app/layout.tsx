import type { Metadata } from "next";
import "./globals.css";
import "./extended.css";

export const metadata: Metadata = {
  title: "Reclaim — Turn old tech into cash",
  description: "A modern device trade-in experience for phones, tablets, watches and Macs.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

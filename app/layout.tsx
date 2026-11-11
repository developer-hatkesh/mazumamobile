import type { Metadata } from "next";
import "./globals.css";
import "./extended.css";

export const metadata: Metadata = {
  title: "ABC DEMO — Turn old technology into new possibility",
  description: "A modern, considered device trade-in experience for phones, tablets, watches, Macs and consoles.",
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

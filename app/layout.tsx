import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: "Khenyshi Hinlog — Full-stack Developer",
  description:
    "Khenyshi Hinlog is a full-stack developer building clear interfaces, dependable systems, and useful software.",
  keywords: [
    "Software Developer",
    "Full-Stack",
    "Portfolio",
  ],
  openGraph: {
    title: "Khenyshi Hinlog — Full-stack Developer",
    description: "Useful software, thoughtfully built.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Khenyshi Hinlog portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khenyshi Hinlog — Full-stack Developer",
    description: "Useful software, thoughtfully built.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

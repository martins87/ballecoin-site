import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "./assets/fonts/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "./assets/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "./assets/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./assets/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "./assets/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-poppins",
});

const inter = localFont({
  src: [
    {
      path: "./assets/fonts/Inter_24pt-Medium.ttf",
      weight: "300",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BalleCoin",
  description:
    "A primeira criptomoeda de apoio e doações para jovens talentos da dança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

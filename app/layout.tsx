import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Session from "./components/Session";

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
      path: "./assets/fonts/Inter-Light.ttf",
      weight: "300",
    },
    {
      path: "./assets/fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "./assets/fonts/Inter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./assets/fonts/Inter-Bold.ttf",
      weight: "700",
    },
    {
      path: "./assets/fonts/Inter-ExtraBold.ttf",
      weight: "800",
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
    <Session>
      <html lang="en">
        <body className={`${poppins.variable} ${inter.variable} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Session>
  );
}

import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Configure fonts WITH variable
const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

// Configure Aeonik TRIAL custom font - ALL WEIGHTS
const aeonikTrial = localFont({
  src: [
    {
      path: '../public/fonts/aeoniktrial-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/aeoniktrial-lightitalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/aeoniktrial-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/aeoniktrial-regularitalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/aeoniktrial-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/aeoniktrial-bolditalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-aeonik-trial',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Potentia Gym - Maarheeze",
  description: "Train in a fun way with personal attention",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${syne.variable} ${inter.variable} ${aeonikTrial.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
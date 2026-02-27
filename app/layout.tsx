import "./globals.css";

import { DM_Sans, Montserrat } from "next/font/google";

import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/SidebarContext";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hiqos Tech",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${dmSans.variable} antialiased oveflow-hidden`}
      >
        <SidebarProvider>
          <Navbar/>
          {children}
          <Footer/>
          <Sidebar/>
        </SidebarProvider>
      </body>
    </html>
  );
}

import "./globals.css";

import Footer from "@/components/Footer";
import GsapCleaner from "@/components/GsapCleaner";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/SidebarContext";

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
        className={`antialiased flex flex-col min-h-screen`}
      >
        <SidebarProvider>
          <Navbar/>
          <main className="flex-1">
            <GsapCleaner>
              {children}
            </GsapCleaner>
          </main>
          <Footer/>
          <Sidebar/>
        </SidebarProvider>
      </body>
    </html>
  );
}

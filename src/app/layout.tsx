import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Glassy Navbar",
  description: "A beautiful glassy navbar for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Toaster position="top-center" />
        <div className="flex flex-col min-h-screen justify-between items-center gap-10 pt-4 pb-0 ">
          <div className="flex flex-col gap-10 justify-center items-center w-full">
            <Navbar />

            <div className="max-w-[1300px] mx-auto text-slate-700">
              {children}
            </div>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "../globals.css";

import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/homecomponents/Footer";
import Navbar from "@/components/homecomponents/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "TutorLink",
  description: "a platform where students can discover tutors, book sessions, and manage their learning journey",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toaster position="top-right"/>
      <Navbar/>
        {children}
      <Footer/>
    </>
  );
}

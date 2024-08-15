import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const userInfo = [{}]

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Sample dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='flex'>
          <div className="my-5 h-[100vh]">
            <Sidebar />
          </div>
          <div className="my-5 p-5 w-full md:max-w-[1140px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

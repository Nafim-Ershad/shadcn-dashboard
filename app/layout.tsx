import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SidebarComponent from "@/components/SideBar.Component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn Dashboard",
  description: "A dashboard app using Shadcn and NextJs14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen w-full bg-white text-black flex', inter.className, {"debug-screens" : process.env.NODE_ENV === 'development'})}>
        
        {/* Side Bar */}
        <SidebarComponent/>

        {/* Main Page */}
        
        <div className="p-8 w-full"> { children } </div>
      </body>
    </html>
  );
}

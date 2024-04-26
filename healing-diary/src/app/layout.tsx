import Header from "@/common/header/header";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import BottomMenu from "@/common/menu/bottom-menu";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} overflow-auto`}>
        <div className="flex min-h-screen w-full flex-col items-center justify-start">
          <Header />
          {children}
          <BottomMenu />
        </div>
      </body>
    </html>
  );
}

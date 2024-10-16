import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "./component/footer";
import ThemeSwitch from "./component/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishant personal portfolio",
  description: "I have 2 years of experience in coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-28
        sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <div className="bg-[#fbe2e3] h-[31.25rem] w-[31.25rem] rounded-full absolute top-[-6rem] right-[11rem] blur-[10rem] sm:w-[68.75rem] -z-10 dark:bg-[#946263]"></div>

        <div className="bg-[#dbd7fb] h-[31.25rem] w-[50rem] rounded-full absolute top-[-1rem] left-[-35rem] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10 dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header></Header>
            {children}
            <Footer></Footer>
            <Toaster position="top-right" />
            <ThemeSwitch></ThemeSwitch>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

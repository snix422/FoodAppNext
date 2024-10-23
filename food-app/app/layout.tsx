import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import SessionProviderWrapper from "@/components/header/SessionProviderWrapper/SessionProviderWrapper";
import ReduxProvider from "@/components/Providers/ReduxProvider";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
       <ReduxProvider>
        <SessionProviderWrapper>
        <Header />
        {children}
        <Toaster />
        </SessionProviderWrapper>
        </ReduxProvider>
        </body>
    </html>
  );
}

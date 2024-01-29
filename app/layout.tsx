import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Chrissy's E-Shop ",
  description: "E-commerce artist : Chrissy Ottenhof",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

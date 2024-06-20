import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/DRY/Header";
import Footer from "./components/DRY/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Homepage",
  description: "Created by Omm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

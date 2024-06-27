import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GTM from "@/utils/GTM";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lush Lawns Kenya",
  description:
    "Transforming your outdoor space. We provide expert lawn care services for Kenyan homes, ensuring lush and healthy lawns for all.",
  other: {
    "google-site-verification": "Zs2m69lRoUZWp-X4iQq_DKhvdoS-cicCduqzR3jhB3U",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GTM />
        <Header />
        <div className=" w-[90%] mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

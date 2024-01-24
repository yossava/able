import Footer from "@/components/Footer";
import NavbarAlt from "@/components/NavbarAlt";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Able Group",
  description: "Able Group",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) {
  return (
    <>
      <NavbarAlt />
      <Component className={poppins.className} {...pageProps} />
      <Footer />
    </>
  );
}

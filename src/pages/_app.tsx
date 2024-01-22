import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Able Group",
  description: "Able Group",
};
export default function App({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}

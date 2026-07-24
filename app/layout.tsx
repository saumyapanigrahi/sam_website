import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam | Portfolio",
  description: "The personal portfolio of Sam."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

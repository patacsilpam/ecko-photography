import { Inter } from "next/font/google";
import "./styles/globals-css/globals.css";
import '@radix-ui/themes/styles.css';
import Link from "next/link";
import { Theme } from "@radix-ui/themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecko Photography",
  description: "We specialize in capturing  the timeless moments of weddings, debuts, and christenings. With a passion  for storytelling and an eye for detail, we strive to create stunning imagery that  reflects the unique essence of each special occasion. ",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}

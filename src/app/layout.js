import { Inter } from "next/font/google";
import "./styles/globals-css/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecko Photography",
  description: "We specialize in capturing  the timeless moments of weddings, debuts, and christenings. With a passion  for storytelling and an eye for detail, we strive to create stunning imagery that  reflects the unique essence of each special occasion. ",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <main className="font-garamond">{children}</main>
      </body>
    </html>
    
  );
}

import { Inter } from "next/font/google";
import "./styles/globals-css/globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecko Photography",
  description: "A photography website for Ecko Photography",
};

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">Ecko Photography</Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link href="/about">Home</Link>
            </li>
            <li>
              <Link href="/about">Portfolio</Link>
            </li>
            <li>
              <Link href="/services">Packages</Link>
            </li>
            <li>
              <Link href="/services">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button className="text-gray focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    </html>
  );
}

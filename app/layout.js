import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Quartet",
  description: "A quartet game by DROG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-cover bg-[url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e')] bg-fixed px-7 lg:px-20">{children}</body>
    </html>
  );
}

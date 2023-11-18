import "./globals.css";

import localFont from "next/font/local";
// import { Vazirmatn } from "next/font/google";
// const vazir = Vazirmatn({
//   subsets: ["arabic", "latin"],
//   display: "swap",
// });

const vazir = localFont({
  src: "./Vazir.woff2",
  display: "swap",
});

export const metadata = {
  title: "Quiz App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className={vazir.className}>
      <body>{children}</body>
    </html>
  );
}

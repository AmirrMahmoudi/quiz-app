import "@/src/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";

import localFont from "next/font/local";
import AuthProvider from "./AuthProvider";

const vazir = localFont({
  src: "../../assets/Vazir.woff2",
  display: "swap",
});

export const metadata = {
  title: "Quiz App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params }) {
  console.log(`Layout Lang: ${params.lang}`);
  return (
    <html
      lang={params.lang}
      dir={params.lang === "en-us" ? "ltr" : "rtl"}
      className={vazir.className}
    >
      <body>
<<<<<<< HEAD:src/app/[lang]/layout.js
        {children}
        {/* {params} */}
=======
        <AuthProvider>{children}</AuthProvider>
>>>>>>> next-auth:src/app/layout.js
      </body>
    </html>
  );
}

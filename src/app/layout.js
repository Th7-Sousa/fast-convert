import { Spline_Sans } from "next/font/google";
import "./globals.css";

const spline = Spline_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Fast Convert - Conversor de medidas",
  description: "Conversor de Medidas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${spline.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}

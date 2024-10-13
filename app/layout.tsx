import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TireoideCare",
  description: "Developed by Ametista, a Pipoca Ágil Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} py-8`}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
        />
      </body>
    </html>
  );
}

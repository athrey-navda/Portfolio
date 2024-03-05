import { Quicksand } from "next/font/google";
import { Providers } from "./provider";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Athrey",
  description: "Crafting Code, Exploring Worlds, Cooking Creations, and Grooving to the Beat!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/images/logo/favicon.ico" />
      </head>
      <body className={quicksand.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

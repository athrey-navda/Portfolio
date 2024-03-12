import { Quicksand } from "next/font/google";
import { Providers } from "./provider";
import Head from "next/head"; // Import the Head component from next/head
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Athrey",
  description:
    "Crafting Code, Exploring Worlds, Cooking Creations, and Grooving to the Beat!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Insert your script here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3902775,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
        <link rel="shortcut icon" href="/images/logo/favicon.ico" />
      </Head>
      <body className={quicksand.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

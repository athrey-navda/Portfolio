"use client";
import { Quicksand } from "next/font/google";
import { Providers } from "./provider";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MouseTracker from "./components/mouseTracker";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathName = window.location.pathname;
    if (pathName === "/") {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  const metadata = {
    title: "Athrey",
    description:
      "Crafting Code, Exploring Worlds, Cooking Creations, and Grooving to the Beat!",
  };

  return (
    <html lang="en">
      <head>
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
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="shortcut icon" href="/images/logo/favicon.ico" />
      </head>
      <body className={quicksand.className}>
        <Provider store={store}>
          <Providers>
            <Suspense fallback={<Loading />}>
              {loading ? (
                <Loading />
              ) : (
                <>
                  <MouseTracker />
                  <Navbar />
                  <div>{children}</div>
                  <Footer />
                </>
              )}
            </Suspense>
          </Providers>
        </Provider>
      </body>
    </html>
  );
}

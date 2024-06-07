"use client";

import { SDKProvider } from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { GeistSans } from "geist/font/sans";

import "./_globals.css";
import App from "./_App";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`text-[16px] leading-[24px] ${GeistSans.className}`}
      lang="en"
    >
      <body>
        <TonConnectUIProvider
          manifestUrl="https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json"
          actionsConfiguration={{
            twaReturnUrl: "https://t.me/alagunoff_bot/test",
          }}
        >
          <SDKProvider>
            <App>{children}</App>
          </SDKProvider>
        </TonConnectUIProvider>
      </body>
    </html>
  );
}

export default Layout;

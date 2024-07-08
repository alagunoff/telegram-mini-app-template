"use client";

import { SDKProvider } from "@telegram-apps/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import classNames from "classnames";
import { GeistSans } from "geist/font/sans";

import App from "./_App";
import "./_globals.css";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={classNames("text-[16px]", GeistSans.className)} lang="en">
      <body>
        <TonConnectUIProvider
          manifestUrl="https://telegram-mini-app-template.vercel.app/tonconnect-manifest.json"
          actionsConfiguration={{
            twaReturnUrl: "https://t.me/alagunoff_bot/template",
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

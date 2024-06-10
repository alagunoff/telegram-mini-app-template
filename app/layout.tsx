"use client";

import { SDKProvider } from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import classNames from "classnames";
import { GeistSans } from "geist/font/sans";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./_App"), { ssr: false });
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

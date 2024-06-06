"use client";

import { SDKProvider } from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import "./_globals.css";
import App from "./_App";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json">
          <SDKProvider>
            <App>{children}</App>
          </SDKProvider>
        </TonConnectUIProvider>
      </body>
    </html>
  );
}

export default Layout;

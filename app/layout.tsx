"use client";

import {
  SDKProvider,
  retrieveLaunchParams,
  useBackButton,
  useMiniApp,
  useThemeParams,
  useViewport,
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  isSSR,
} from "@tma.js/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { useRouter, usePathname } from "next/navigation";
import { type FC, useEffect, useMemo } from "react";

import "./globals.css";

const BackButtonManipulator: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const bb = useBackButton(true);

  useEffect(() => {
    if (!bb) {
      return;
    }
    if (pathname === "/") {
      bb.hide();
    } else {
      bb.show();
    }
  }, [pathname, bb]);

  useEffect(() => {
    return bb?.on("click", () => {
      router.back();
    });
  }, [bb, router]);

  return null;
};

function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const miniApp = useMiniApp(true);
  const themeParams = useThemeParams(true);
  const viewport = useViewport(true);

  useEffect(() => {
    return miniApp && themeParams && bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return themeParams && bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  return children;
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const debug = useMemo(() => {
    return isSSR() ? false : retrieveLaunchParams().startParam === "debug";
  }, []);
  const manifestUrl = useMemo(() => {
    return isSSR()
      ? ""
      : new URL("tonconnect-manifest.json", window.location.href).toString();
  }, []);

  useEffect(() => {
    if (debug) {
      void import("eruda").then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider acceptCustomStyles debug={debug}>
        <BackButtonManipulator />
        <Container>{children}</Container>
      </SDKProvider>
    </TonConnectUIProvider>
  );
}

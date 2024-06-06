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
import type { AppProps } from "next/app";
import { useRouter, usePathname } from "next/navigation";
import { type FC, useEffect, useMemo } from "react";

import { ErrorBoundary } from "./_components/ErrorBoundary";

import "./globals.css";

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === "string"
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

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

const App: FC<AppProps> = ({ pageProps, Component }) => {
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

  return (
    <>
      <BackButtonManipulator />
      <Component {...pageProps} />
    </>
  );
};

const Inner: FC<AppProps> = (props) => {
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
        <App {...props} />
      </SDKProvider>
    </TonConnectUIProvider>
  );
};

export default function CustomApp(props: AppProps) {
  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <Inner {...props} />
    </ErrorBoundary>
  );
}

"use client";

import {
  useMiniApp,
  useThemeParams,
  useViewport,
  useBackButton,
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
} from "@tma.js/sdk-react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const miniApp = useMiniApp(true);
  const themeParams = useThemeParams(true);
  const viewport = useViewport(true);
  const backButton = useBackButton(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    return miniApp && themeParams && bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return themeParams && bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  useEffect(() => {
    if (!backButton) {
      return;
    }

    if (pathname === "/") {
      backButton.hide();
    } else {
      backButton.show();
    }
  }, [backButton, pathname]);

  useEffect(() => {
    return backButton?.on("click", () => {
      router.back();
    });
  }, [backButton, router]);

  return (
    <main className="px-2.5" style={{ color: themeParams?.textColor }}>
      {children}
    </main>
  );
}

export default App;

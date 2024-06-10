"use client";

import { useThemeParams, useBackButton } from "@tma.js/sdk-react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const themeParams = useThemeParams(true);
  const backButton = useBackButton(true);

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
    <main className="px-3 py-4" style={{ color: themeParams?.textColor }}>
      {children}
    </main>
  );
}

export default App;

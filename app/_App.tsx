"use client";

import { useThemeParams } from "@tma.js/sdk-react";

function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeParams = useThemeParams(true);

  return (
    <main className="px-3 py-4" style={{ color: themeParams?.textColor }}>
      {children}
    </main>
  );
}

export default App;

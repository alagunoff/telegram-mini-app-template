const App = dynamic(() => import("./_App"), { ssr: false });

import dynamic from "next/dynamic";
import "./globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <App>{children}</App>;
}

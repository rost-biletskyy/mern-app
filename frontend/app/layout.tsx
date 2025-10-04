import "./globals.scss";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-darkreader-mode="dynamic"
      data-darkreader-scheme="dark"
      data-darkreader-proxy-injected="true"
    >
      <body>{children}</body>
    </html>
  );
}

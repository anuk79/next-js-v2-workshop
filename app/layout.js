import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS workshop",
  description: "NextJS workshop for v13+, with App routers and React Server Components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header><h1>NextJS Workshop</h1></header>
        <main>
          {children}
        </main>
        <footer>This is footer</footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Johanna Johnson",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="container">

          <nav className="navbar">
            <a href="/" className="logo-link">
              <h1 className="logo">JOHANNA JOHNSON</h1>
            </a>
            <div className="nav-links">
              <a href="/about">About</a>
              <a href="/works">Works</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>

          <div className="content">
            {children}
          </div>

          <footer className="footer">
            <p>Copyright of Johanna Johnson</p>
            <div className="footer-links">
              <a href="/about">About</a>
              <a href="/works">Works</a>
              <a href="/contact">Contact</a>
            </div>
          </footer>

        </main>
      </body>
    </html>
  );
}
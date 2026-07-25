import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ticket Dashboard",
  description: "Ticket Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="navbar">
          <div className="container navbar-content">
            <h1 className="logo">TestStalse</h1>

            <nav className="nav">
              <Link href="/tickets" className="nav-button">
                Tickets
              </Link>

              <Link href="/dashboard" className="nav-button">
                Metrics
              </Link>
            </nav>
          </div>
        </header>

        <main className="container content">
          {children}
        </main>
      </body>
    </html>
  );
}
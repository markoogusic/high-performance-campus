import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://highperformancecampus.com"), // TODO: actualizar con URL real
  title: {
    default: "High Performance Campus — Campus de fútbol de alto rendimiento",
    template: "%s | High Performance Campus",
  },
  description:
    "Campus intensivo de fútbol con metodología profesional, sesiones individualizadas, trabajo de gimnasio y tecnología aplicada.",
  keywords: ["campus fútbol", "alto rendimiento", "entrenamiento", "formación deportiva"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "High Performance Campus",
    description: "Formación de élite para el futbolista del mañana.",
    url: "https://highperformancecampus.com",
    siteName: "High Performance Campus",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

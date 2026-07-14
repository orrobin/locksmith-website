import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import EmergencyBanner from "@/components/EmergencyBanner";
import JsonLd from "@/components/JsonLd";
import Gtm from "@/components/Gtm";
import { locksmithSchema } from "@/lib/seo";
import { site } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `Chaveiro Lisboa 24h · Abertura de Portas em 20–30 min · ${site.brand}`,
    template: `%s · ${site.brand}`,
  },
  description: `Chaveiro em Lisboa 24 horas. Preços fixos publicados, técnicos certificados, chegada em 20–30 min. ★${site.rating.value} no Google. Ligue ${site.phoneDisplay} ou WhatsApp.`,
};

export const viewport: Viewport = {
  themeColor: "#0b2540",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${geistSans.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Gtm />
        <JsonLd data={locksmithSchema()} />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-accent-500 focus:p-3 focus:font-bold"
        >
          Saltar para o conteúdo
        </a>
        <EmergencyBanner />
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCtaBar />
      </body>
    </html>
  );
}

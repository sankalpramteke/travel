import type { Metadata } from "next";
import Script from "next/script";
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
  title: "WanderWorld Tours & Holidays",
  description:
    "Discover curated tour packages, find your perfect holiday, and manage your bookings – ready for smart chatbot assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Zoho SalesIQ live chat widget */}
        <Script
          id="zoho-salesiq-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$zoho = window.$zoho || {};
              $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
            `,
          }}
        />
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siq21d5dbf3e5aed1f3b9a4d1b2fb90598e376267992f7ab046de528b8f28396cfb"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}

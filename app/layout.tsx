import type { Metadata } from "next";
import { Inter, Nothing_You_Could_Do } from "next/font/google"; // Correct import
import Script from "next/script";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Ensure weight is specified for handwriting font
const handwriting = Nothing_You_Could_Do({ weight: "400", subsets: ["latin"], variable: "--font-handwriting" });

export const metadata: Metadata = {
  title: "Invictus AI | Enterprise-Grade AI. Startup Speed.",
  description: "Custom AI automation, intelligent agents, and digital infrastructure for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Tag Manager - Head Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TB9SQLN2');`}
      </Script>
      <body className={clsx(inter.variable, handwriting.variable, "bg-white text-bond-navy antialiased font-sans min-h-screen flex flex-col")}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TB9SQLN2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

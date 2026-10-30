import { GoogleTagManager } from "@next/third-parties/google";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import { personalData, siteUrl } from "@/utils/data/personal-data";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/globals.scss";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${personalData.name} · Full Stack Developer in Faisalabad, Pakistan`;
const description =
  "Full stack developer in Faisalabad, Pakistan. 3+ years building web, mobile and AI apps with React, Node.js, React Native and Mastra AI. Remote for US and UK teams.";

// Canonical URLs are set per page (app/page.js, the tools pages), not here,
// because anything set in the root layout is inherited by every route.
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${personalData.name}` },
  description,
  applicationName: personalData.name,
  keywords: [
    "full stack developer",
    "full stack developer in Pakistan",
    "full stack developer in Faisalabad",
    "developer in Faisalabad",
    "developer in Pakistan",
    "software developer Faisalabad",
    "web developer Faisalabad",
    "hire full stack developer Pakistan",
    "remote full stack developer",
    "MERN stack developer",
    "React developer Pakistan",
    "Node.js developer Pakistan",
    "React Native developer",
    "AI developer Pakistan",
    "Ayan Naseer",
    "M. Ayan Naseer",
  ],
  authors: [{ name: personalData.name, url: siteUrl }],
  creator: personalData.name,
  category: "technology",
  verification: { google: "aLIaDF4hw2F9DQ8adjH9okk3hc2uT1zFVBZmdBp-wlU" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: personalData.name,
    locale: "en_US",
    type: "profile",
  },
  twitter: { card: "summary_large_image", title, description },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Faisalabad",
    "geo.position": "31.4504;73.1350",
    ICBM: "31.4504, 73.1350",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#121211" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      {process.env.NEXT_PUBLIC_GTM && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />}
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Umami analytics (cookie-free). data-domains limits tracking to the live
            site, so local dev and Netlify preview deploys aren't counted. */}
        <Script
          src="https://analytics.open-domains.com/script.js"
          data-website-id="b9c0f3c0-9ca5-4557-a41a-fe1bf2e89868"
          data-domains="ayan.is-a.dev"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

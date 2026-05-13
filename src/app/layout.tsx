import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer";
import UniversitySelectionPopup from "@/components/UniversitySelectionPopup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jam Park Private Secondary School | Lilongwe, Malawi",
    template: "%s | Jam Park Private Secondary School",
  },

  description:
    "Jam Park Private Secondary School is a leading private secondary institution in Area 25, Lilongwe, Malawi. Offering JCE and MSCE programmes with a 94% pass rate.",

  keywords: [
    "Jam Park",
    "Jam Park Private Secondary School",
    "secondary school Lilongwe",
    "private school Malawi",
    "JCE school Malawi",
    "MSCE school Malawi",
    "best school Lilongwe",
    "Area 25 school",
    "secondary school Area 25",
    "Malawi school admissions",
  ],

  authors: [{ name: "Jam Park Private Secondary School" }],
  creator: "Jam Park Private Secondary School",
  publisher: "Jam Park Private Secondary School",

  metadataBase: new URL("https://www.jamparksecondaryschool.site"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_MW",
    url: "https://www.jamparksecondaryschool.site",
    siteName: "Jam Park Private Secondary School",

    title: "Jam Park Private Secondary School | Lilongwe, Malawi",

    description:
      "A premier private secondary school in Lilongwe, Malawi — nurturing academic excellence, discipline and character since 2005.",

    images: [
      {
        url: "/images/student1.jpeg",
        width: 1200,
        height: 630,
        alt: "Jam Park Private Secondary School — Lilongwe, Malawi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Jam Park Private Secondary School | Lilongwe, Malawi",

    description:
      "A premier private secondary school in Lilongwe, Malawi — nurturing academic excellence, discipline and character since 2005.",

    images: ["/images/student1.jpeg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSerif.variable} ${inter.variable} antialiased`}
      >
        <UniversitySelectionPopup />

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
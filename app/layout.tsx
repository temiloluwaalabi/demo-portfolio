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
  // Basic SEO
  title: {
    default:
      "Temiloluwa Emmanuel Alabi - Frontend Developer & Web Solutions Expert",
    template: "%s | Temiloluwa Alabi Portfolio",
  },
  description:
    "Frontend Developer specializing in Next.js, React, and TypeScript. Experienced in building healthcare, fintech, e-commerce, and ministry web applications with modern technologies like TailwindCSS, Zustand, and shadcn/ui.",

  // Keywords for SEO
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer Nigeria",
    "TailwindCSS Expert",
    "Healthcare Web Applications",
    "Fintech Developer",
    "E-commerce Developer",
    "Ministry Website Developer",
    "Zustand",
    "shadcn/ui",
    "React Hook Form",
    "Zod Validation",
    "TanStack Query",
    "Temiloluwa Alabi",
    "Lagos Web Developer",
    "Nigerian Frontend Developer",
    "Remote Frontend Developer",
  ],

  // Author information
  authors: [
    {
      name: "Temiloluwa Emmanuel Alabi",
      url: "https://github.com/temiloluwa-js",
    },
  ],
  creator: "Temiloluwa Emmanuel Alabi",
  publisher: "Temiloluwa Emmanuel Alabi",

  // Open Graph for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com", // Replace with your actual domain
    title:
      "Temiloluwa Emmanuel Alabi - Frontend Developer & Web Solutions Expert",
    description:
      "Experienced Frontend Developer building innovative web applications with Next.js, React, and TypeScript. Specializing in healthcare, fintech, and e-commerce solutions.",
    siteName: "Temiloluwa Alabi Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Temiloluwa Emmanuel Alabi - Frontend Developer Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Temiloluwa Emmanuel Alabi - Frontend Developer",
    description:
      "Frontend Developer specializing in Next.js, React, and modern web technologies. Building innovative solutions across healthcare, fintech, and e-commerce.",
    images: ["/twitter-image.jpg"], // Add your Twitter card image
    creator: "@your_twitter_handle", // Replace with your Twitter handle if you have one
  },

  // Additional metadata
  applicationName: "Temiloluwa Alabi Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],

  // Verification (add these if you have them)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // other: {
    //   'msvalidate.01': 'your-bing-verification-code'
    // }
  },

  // Robots
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

  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Additional tags
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
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
      </body>
    </html>
  );
}

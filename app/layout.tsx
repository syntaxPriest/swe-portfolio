import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./style.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const SITE_URL = "https://syntaxpriest.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Daniel Adewale — Software Engineer",
    template: "%s · Daniel Adewale",
  },
  description:
    "Senior Frontend Engineer with 6+ years building production interfaces in React, Next.js and TypeScript. I turn sharp product strategy into interfaces that feel obvious.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Daniel Adewale",
    title: "Daniel Adewale — Software Engineer",
    description:
      "Senior Frontend Engineer with 6+ years building production interfaces in React, Next.js and TypeScript.",
    url: SITE_URL,
    images: [
      {
        url: "/user/avatar.png",
        width: 512,
        height: 512,
        alt: "Daniel Adewale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Adewale — Software Engineer",
    description:
      "Senior Frontend Engineer with 6+ years building production interfaces.",
    images: ["/user/avatar.png"],
    creator: "@syntaxPriest",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="view-transition" content="same-origin" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel Adewale",
              givenName: "Daniel",
              familyName: "Adewale",
              jobTitle: "Senior Frontend Engineer",
              description:
                "Senior Frontend Engineer with 6+ years building production interfaces in React, Next.js and TypeScript.",
              url: SITE_URL,
              email: "adewaled03@gmail.com",
              telephone: "+2349020146835",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              sameAs: [
                "https://github.com/syntaxPriest",
                "https://www.linkedin.com/in/syntaxpriest/",
                "https://twitter.com/syntaxPriest",
                "https://dev.to/syntaxpriest",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Frontend Engineering",
                "Design Systems",
                "UI Engineering",
              ],
              image: `${SITE_URL}/user/avatar.png`,
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

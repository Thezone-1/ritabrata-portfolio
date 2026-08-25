import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Mrs_Saint_Delafield, Young_Serif } from "next/font/google";
import { Providers } from "./providers";
import { ThemeToggle } from "./components/ThemeToggle";
import { Splash } from "./components/Splash";
import { profile } from "@/lib/content";
import "./globals.css";

const serif = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const script = Mrs_Saint_Delafield({ subsets: ["latin"], weight: "400", variable: "--font-script" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rbganguly.in"),
  title: profile.name,
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: profile.name,
    description: profile.description,
    url: "/",
    type: "website",
    images: ["/portrait.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${mono.variable} ${script.variable}`}
    >
      <body className="font-sans font-normal">
        <Providers>
          <Splash />
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/toaster"
import { Providers } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: '',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1"> <Providers>{children}</Providers></main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

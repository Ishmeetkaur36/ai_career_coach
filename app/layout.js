// app/layout.js 
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets : ["latin"]});


export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} `}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          
          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made by ISHMEET</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}


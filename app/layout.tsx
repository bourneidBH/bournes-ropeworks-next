import { roboto } from '../styles/fonts';
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="w-full flex flex-col min-h-[calc(100vh-96px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

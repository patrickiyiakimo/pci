import "./globals.css";
import HeaderContainer from "@/components/containers/HeaderContainer";
import FooterContainer from "@/components/containers/FooterContainer";

export const metadata = {
  title: "PCI Apps | AI, Software, UX - Product Agency",
  description:
    "A Product Agency That Thinks Beyond The Build. We work the strategy before the build, so what ships actually moves the number you're being measured on.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-base text-contrast font-sans">
        <HeaderContainer />
        <main className="flex-1">{children}</main>
        <FooterContainer />
      </body>
    </html>
  );
}
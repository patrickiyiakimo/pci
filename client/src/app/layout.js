import "./globals.css";
import Script from "next/script";
import HeaderContainer from "@/components/containers/HeaderContainer";
import FooterContainer from "@/components/containers/FooterContainer";

export const metadata = {
  title: "PCI Apps | AI, Software, UX - Product Agency",
  description:
    "A Product Agency That Thinks Beyond The Build. We work the strategy before the build, so what ships actually moves the number you're being measured on.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
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
        <Script
          id="smartsupp-live-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _smartsupp = _smartsupp || {};
              _smartsupp.key = '78fd41b6d164c2b656dbeee4f15167d7a962995d';
              window.smartsupp||(function(d) {
                var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
                s=d.getElementsByTagName('script')[0];c=d.createElement('script');
                c.type='text/javascript';c.charset='utf-8';c.async=true;
                c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
              })(document);
            `,
          }}
        />
        <noscript>
          Powered by <a href="https://www.smartsupp.com" target="_blank">Smartsupp</a>
        </noscript>
      </body>
    </html>
  );
}
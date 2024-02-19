import { WhattsappFloat } from "assets/icons/WhattsappFloat"
import { Footer } from "components/global/Footer"
import { Navbar } from "components/global/Navbar"
import { Inter } from "next/font/google"
import "styles/global.css"
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter( { subsets: [ "latin" ] } )

export const metadata = {
  title: "هيدروجين",
  description: "هيدروجين شركة مسجلة في منصة معروف المقدمة من وزارة التجارة برقم 108013",
}

export default function RootLayout ( { children } )
{
  return (
    <html lang="ar">
      <head>
{/*        <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-NS6MLSG"></script>*/}
{/*        <script dangerouslySetInnerHTML={ {*/}
{/*          __html: `*/}
{/*          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
{/*new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
{/*j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
{/*'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
{/*})(window,document,'script','dataLayer','GTM-NS6MLSG');*/}

{/*window.dataLayer = window.dataLayer || [];*/}
{/*  function gtag(){window.dataLayer.push(arguments);}*/}
{/*  gtag('js', new Date());*/}

{/*  gtag('config', 'GTM-NS6MLSG');*/}

{/*`} } />*/}
{/*        <script dangerouslySetInnerHTML={ {*/}
{/*          __html: `!function(f,b,e,v,n,t,s)*/}
{/*{if(f.fbq)return;n=f.fbq=function(){n.callMethod?*/}
{/*n.callMethod.apply(n,arguments):n.queue.push(arguments)};*/}
{/*if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';*/}
{/*n.queue=[];t=b.createElement(e);t.async=!0;*/}
{/*t.src=v;s=b.getElementsByTagName(e)[0];*/}
{/*s.parentNode.insertBefore(t,s)}(window, document,'script',*/}
{/*'https://connect.facebook.net/en_US/fbevents.js');*/}
{/*fbq('init', '2054771714869797');*/}
{/*fbq('track', 'PageView');`*/}
{/*        } } />*/}
{/*        <noscript><img style={ { display: 'none' } }*/}
{/*          src="https://www.facebook.com/tr?id=2054771714869797&ev=PageView&noscript=1"*/}
{/*        /></noscript>*/}
        <title>{ metadata.title }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={ metadata.description } />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={ inter.className }>
        {/*<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NS6MLSG"*/}
        {/*  style={ { display: 'none', visibility: 'hidden' } }></iframe></noscript>*/}
        <Navbar />
        
        <main style={ {
          minHeight: "calc(100vh - 306px)",

        } }>
          { children }
        </main>

        <div className=" fixed bottom-5 right-5 z-100 ">
          <a
            className="flex items-center w-12 h-12 justify-center bg-primary rounded-full border shadow"
            href="https://api.whatsapp.com/send/?phone=%2B966504281941&text&app_absent=0" target="_blank" rel="noopener noreferrer">
            <WhattsappFloat />
          </a>
        </div>
        <GoogleTagManager gtmId="GTM-NS6MLSG" />
        <Footer />
      </body>


    </html>
  )
}

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script strategy="beforeInteractive" src='/js/jquery.min.js'></Script>
                {/* <Script strategy="beforeInteractive" src='/js/common.js'></Script> */}
                <Script strategy="beforeInteractive" src='/js/bootstrap.js'></Script>
                <Script strategy="beforeInteractive" src='/js/jquery.smoove.min.js'></Script>
                <Script strategy="beforeInteractive" src='/js/lightbox.js'></Script>
                <Script strategy="beforeInteractive" src='/js/online.js'></Script>
            </body>
        </Html>
    )
}
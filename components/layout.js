import Head from 'next/head'
import Top from './top'
import Bottom from './bottom'
import Script from 'next/script'

export default function Layout({ children }) {
    return (<>
        <Head>
            <title>岳来岳好</title>
        </Head>
        <Script strategy="beforeInteractive" src='/js/jquery.min.js'></Script>
        <Script strategy="beforeInteractive" src='/js/bootstrap.js'></Script>
        <Script strategy="beforeInteractive" src='/js/common.js'></Script>        
        <Script strategy="beforeInteractive" src='/js/jquery.smoove.min.js'></Script>
        <Script strategy="beforeInteractive" src='/js/lightbox.js'></Script>
        <Script strategy="beforeInteractive" src='/js/online.js'></Script>
        <Top></Top>
        <div>{children}</div>
        <Bottom></Bottom>
    </>)

}
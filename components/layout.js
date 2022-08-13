import Head from 'next/head'
import Top from './top'
import Bottom from './bottom'

export default function Layout({ children }) {
    return (<>
        <Head>
            <title>岳来岳好</title>
        </Head>
        <Top></Top>
        <div>{children}</div>
        <Bottom></Bottom>
    </>)

}
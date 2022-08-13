import '../styles/globals.css'
import '../styles/css/bootstrap.css'
import '../styles/css/bxslider.css'
import '../styles/css/lightbox.css'
import '../styles/css/online.css'
import '../styles/css/style.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
      // router.reload()
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp

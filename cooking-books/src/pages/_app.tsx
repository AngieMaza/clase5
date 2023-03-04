import "../styles/globals.css"
import type { AppProps } from 'next/app'
import "bootswatch/dist/flatly/bootstrap.min.css"
import Layout from '../features/Layout/Index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp

import Layout from '../components/Layout'
import DotMenu from 'components/DotMenu'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DotMenu />
      <Component {...pageProps} />
    </Layout>
  )
}

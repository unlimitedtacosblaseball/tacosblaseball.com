import Layout from "../components/Layout";
import "../styles/source.css"
import "../styles/styles.css"

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  )
}
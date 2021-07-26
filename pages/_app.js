import Layout from "../components/Layout";
import "../styles/source.css"
import "../styles/styles.css"

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Tacos Blaseball" description="TacoBlaseball">
      <Component {...pageProps} />
    </Layout>
  )
}
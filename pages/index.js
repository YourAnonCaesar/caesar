import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Project!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Caesar Sundu." />
        <p className="description">
          <code></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

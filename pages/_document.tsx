import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Photos TGS Springbreak - 2022"
          />
          <meta property="og:site_name" content="https://photos.tgs-springbreak.fr" />
          <meta
            property="og:description"
            content="Photos TGS Springbreak - 2022"
          />
          <meta property="og:title" content="Photos TGS Springbreak - 2022" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Photos TGS Springbreak - 2022" />
          <meta
            name="twitter:description"
            content="Photos TGS Springbreak - 2022"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

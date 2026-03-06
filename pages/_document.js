import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ChatGPT Finder is a tool to manage all your ChatGPT creations like magic." />
        <meta name="keywords" content="ChatGPT Finder, ChatGPT, ChatGPT explorer, ChatGPT manager ChatGPT file manager, ChatGPT creations manager, ChatGPT creations explorer" />
        <link rel="canonical" href="https://chatgptfinder.app/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-[Inter]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

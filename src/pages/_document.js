import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyles, createStylesServer } from '@mantine/next'

const stylesServer = createStylesServer();

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


export async function getInitialProps(ctx) {
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initlaProps,
    styles: [
      <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />
    ],
  };
}
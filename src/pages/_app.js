import Head from "next/head";
import { MantineProvider, AppShell, Header, Container } from "@mantine/core";
export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light'
        }}
      >
        <AppShell header={<Header height={60}></Header>}>
          <Container>
            <Component {...pageProps} />
         </Container>
        </AppShell>
      </MantineProvider>
    </>


  )
}
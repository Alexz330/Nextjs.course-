import { NextPage } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'

type NextPageWithLatouy = NextPage & {
  getLayout?: ( page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLatouy
}

function MyApp({ Component, pageProps } : AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout (<Component {...pageProps} />)
}

export default MyApp

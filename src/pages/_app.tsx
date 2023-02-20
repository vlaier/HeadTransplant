import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { CartContextProvider } from '@/components/cart/Context';
import { SWRConfig } from 'swr';
import { swrConfig } from '@/lib/client';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={swrConfig}>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </SWRConfig>
  );
}

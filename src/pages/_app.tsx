import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { CartContextProvider } from "@/components/Cart/CartContext";
import { SWRConfig } from "swr";
import { swrClientConfig } from "@/lib/swrClientConfig";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={swrClientConfig}>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </SWRConfig>
  );
}

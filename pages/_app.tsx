import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import Header from "./components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider>
      <Header />
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;

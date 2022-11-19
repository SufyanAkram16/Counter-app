import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Buttons from "../components/Buttons";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

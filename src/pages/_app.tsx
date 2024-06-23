import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background: rgb(235,25,43);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <ChakraProvider>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  ) 
}

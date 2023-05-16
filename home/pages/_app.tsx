import type { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import '../styles/globals.css';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <>
    <Component {...pageProps} />

    </>)
};

export default MyApp;



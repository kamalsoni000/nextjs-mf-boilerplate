import type { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import '../styles/globals.css';
import Layout from '../components/layout/Layout'


const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <Layout>
    <Component {...pageProps} />

    </Layout>)
};

export default MyApp;



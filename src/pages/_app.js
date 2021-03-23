import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

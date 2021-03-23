import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

export default function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>
  )
}

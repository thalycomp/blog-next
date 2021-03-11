import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import Header from '../components/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

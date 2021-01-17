import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

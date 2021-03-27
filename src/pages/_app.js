import { GlobalStyles } from '../styles/global';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp = ({Component, pageProps}) =>{
  return (
    <>
      <Header />
      <GlobalStyles />
      <Component {...pageProps}/>
      <Footer />
    </>
  );
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  if (Object.keys(pageProps).length > 0) {
    return {pageProps};
  } else {
    return {};
  }
};

export default MyApp;
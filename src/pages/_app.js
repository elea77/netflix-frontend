import MainLayout from '../components/layouts/MainLayout/MainLayout';
import LoginLayout from '../components/layouts/LoginLayout/LoginLayout';
import '../styles/styles.scss';


function MyApp({ Component, pageProps, ...appProps }) {

  if ([`/login`].includes(appProps.router.pathname))
  return  (
    <LoginLayout>
      <Component {...pageProps} />
    </LoginLayout>
  );

  return  (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp

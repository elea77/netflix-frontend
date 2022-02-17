import MainLayout from '../components/layouts/MainLayout/MainLayout';
import LoginLayout from '../components/layouts/LoginLayout/LoginLayout';
import RegisterLayout from '../components/layouts/RegisterLayout/RegisterLayout';
import DashboardLayout from '../components/layouts/DashboardLayout/DashboardLayout';
import '../styles/styles.scss';
import "swiper/css/bundle";

function MyApp({ Component, pageProps, ...appProps }) {

  if ([`/login`].includes(appProps.router.pathname) || [`/`].includes(appProps.router.pathname))
  return  (
    <LoginLayout>
      <Component {...pageProps} />
    </LoginLayout>
  );

  if ([`/register`].includes(appProps.router.pathname))
  return  (
    <RegisterLayout>
      <Component {...pageProps} />
    </RegisterLayout>
  );

  if ([`/dashboard`].includes(appProps.router.pathname))
  return  (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );

  return  (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp

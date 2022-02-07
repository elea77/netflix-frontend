import MainLayout from '../components/layouts/MainLayout/MainLayout';
import LoginLayout from '../components/layouts/LoginLayout/LoginLayout';
import DashboardLayout from '../components/layouts/DashboardLayout/DashboardLayout';
import '../styles/styles.scss';


function MyApp({ Component, pageProps, ...appProps }) {

  if ([`/login`].includes(appProps.router.pathname) || [`/`].includes(appProps.router.pathname))
  return  (
    <LoginLayout>
      <Component {...pageProps} />
    </LoginLayout>
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

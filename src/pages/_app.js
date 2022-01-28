import MainLayout from '../components/layouts/MainLayout';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return  (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp

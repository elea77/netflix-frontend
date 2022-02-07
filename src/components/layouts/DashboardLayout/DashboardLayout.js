import React from 'react';
import HeaderLogo from '../../header/HeaderLogo/HeaderLogo';
import Footer from '../../footer/Footer';
// import '../../styles/styles.scss';
import styles from './DashboardLayout.module.scss';
import LogoImg from '../../../assets/images/Netflix-logo.png';
import Head from 'next/head';

const DashboardLayout = ({children}) => {
    return (
        <>
            <Head>
                <title>Netflix</title>
                <meta name="description" content="Generated by netflix" />
                <link rel="icon" href="/netflix.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.body}>
                    <div className={styles.netflix__header}>
                        <img src={LogoImg.src} alt="Netflix" />
                    </div>
                    {children}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default DashboardLayout;
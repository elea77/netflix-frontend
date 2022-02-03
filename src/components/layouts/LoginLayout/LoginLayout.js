import React from 'react';
import HeaderLogo from '../../header/HeaderLogo/HeaderLogo';
import Footer from '../../footer/Footer';
// import '../../styles/styles.scss';
import styles from './LoginLayout.module.scss';
import LogoImg from '../../../assets/images/Netflix-logo.png';
const LoginLayout = ({children}) => {
    return (
        <>
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

export default LoginLayout;
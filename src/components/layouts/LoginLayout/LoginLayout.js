import React from 'react';
import HeaderLogo from '../../header/HeaderLogo/HeaderLogo';
import HeaderMenu from '../../header/HeaderMenu/HeaderMenu';
import SubHeader from '../../header/SubHeader/SubHeader';
import Footer from '../../footer/Footer';
// import '../../styles/styles.scss';
import styles from './LoginLayout.module.scss';

const LoginLayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
                <HeaderLogo />
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default LoginLayout;
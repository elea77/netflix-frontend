import React from 'react';
import HeaderLogo from '../../header/HeaderLogo/HeaderLogo';
import HeaderMenu from '../../header/HeaderMenu/HeaderMenu';
import SubHeader from '../../header/SubHeader/SubHeader';
import Footer from '../../footer/Footer';
// import '../../styles/styles.scss';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
                <HeaderLogo />
                <HeaderMenu />
                <SubHeader />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;
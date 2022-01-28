import React from 'react';
import LogoImg from '../../../assets/images/Netflix-logo.png';
import styles from "./HeaderLogo.module.scss";
import Link from 'next/link';

const HeaderLogo = () => {
    return (
        <div className={styles.header__logo}>
            <Link href="/">
                <a><img src={LogoImg.src} alt="Netflix" /></a>
            </Link>
        </div>
    );
};

export default HeaderLogo;
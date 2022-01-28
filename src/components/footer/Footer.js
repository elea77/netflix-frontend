import React from 'react';
import styles from "./Footer.module.scss";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='container'>
            <div className={styles.footer__main}>
                <div className={styles.footer__first}>
                    <h2>Informations</h2>
                    <Link href="/about">
                        <a>A propos de nous</a>
                    </Link>
                </div>
                <div className={styles.footer__second}>
                    <h2>Suivez nous</h2>
                    <Link href="https://twitter.com/SheIn_official">
                        <a target="_blank"><BsTwitter fontSize="2em" /></a>
                    </Link>
                    <Link href="https://www.facebook.com/SHEINFrance/">
                        <a target="_blank"><FaFacebookF fontSize="2em" /></a>
                    </Link>
                    <Link href="https://www.instagram.com/sheinfrance_/">
                        <a target="_blank"><GrInstagram fontSize="2em" /></a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
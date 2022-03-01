import Link from 'next/link';
import React from 'react';
import styles from './Sidebar.module.scss'
import LogoImg from '../../../assets/images/Netflix-logo.png';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.sidebar__content}>
                <ul>
                    <li>
                        <Link href="/browse">
                            <a className={styles.logo__link}>
                                <img src={LogoImg.src} alt="Netflix" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/backoffice">
                            <a className={styles.link}>Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/backoffice/movies">
                            <a className={styles.link}>Films</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/backoffice/categories">
                            <a className={styles.link}>Catégories</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default Sidebar;
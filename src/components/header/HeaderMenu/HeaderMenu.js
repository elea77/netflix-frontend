import React from 'react';
import Link from 'next/link'
import styles from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
    return (
        <nav className={styles.header__menu}>
            <ul>
                <li>
                    <Link href="/browser">
                    <a>Accueil</a>
                    </Link>
                </li>
                <li>
                    <Link href="/movies">
                        <a>Films</a>
                    </Link>
                </li>
                <li>
                    <Link href="/wishlist">
                        <a>Ma liste</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;
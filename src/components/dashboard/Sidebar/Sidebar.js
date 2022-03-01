import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import styles from './Sidebar.module.scss'
import LogoImg from '../../../assets/images/Netflix-logo.png';
import { BiCategory } from 'react-icons/bi';
import { MdOutlineMovie } from 'react-icons/md';
import { useRouter } from "next/router";

const Sidebar = () => {

    const [activeMovieUrl, setActiveMovieUrl] = useState(false);
    const [activeCategUrl, setActiveCategUrl] = useState(false);
    const router = useRouter();
    
    
    useEffect(() => {
        if(router.pathname.includes("movies")) {
            setActiveMovieUrl(true);
            setActiveCategUrl(false);
        } else if(router.pathname.includes("categories")) {
            setActiveCategUrl(true);
            setActiveMovieUrl(false);
        }
    },[router]);


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
                    <li className={activeMovieUrl ? styles.is_active : null}>
                        <Link href="/backoffice/movies">
                            <a className={styles.link}>
                                <MdOutlineMovie/> Films
                            </a>
                        </Link>
                    </li>
                    <li className={activeCategUrl ? styles.is_active : null}>
                        <Link href="/backoffice/categories">
                            <a className={styles.link}>
                                <BiCategory/> Catégories
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default Sidebar;
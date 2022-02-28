import React,{useEffect, useState} from 'react';
import Link from 'next/link'
import styles from "./HeaderMenu.module.scss";
import {FiUser} from 'react-icons/fi'
import { useRouter } from "next/router";
import authService from "../../../services/auth.service";


const HeaderMenu = () => {
    const router = useRouter();
    const [isAdmin, setUser] = useState();
    
    const logout = () =>{
        localStorage.removeItem("token");
        router.push("/login");
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        authService.getUser(token)
            .then(data => {
                setUser(data.isAdmin);
            })
            .catch(err => console.log(err));
    },[]);

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
                { isAdmin ? 
                    <li>
                    <Link href="/backoffice">
                        <a>Backoffice</a>
                    </Link>
                </li>
                : null }
                
            </ul>
            <div className={styles.secondary__navigation}>
                <div className={styles.profile__menu}>
                    <div className={styles.menu__button}>
                        <img src="https://occ-0-4164-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUNaVtJEHy01-6BPyK8Old4CGIECp-qTzkWqsDfhmOe9LZPiOMUwc7q53ELL0_fBViGTCaaYQxtVIH8anaV2wnbt85NS.png" alt="profile" />
                        <span className={styles.icon}></span>
                    </div>
                    <div className={styles.menu__content}>
                        <Link href="/profile" >
                            <a><FiUser /> Compte</a>
                        </Link>
                        <span  onClick={() => logout()} >Se déconnecter</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HeaderMenu;
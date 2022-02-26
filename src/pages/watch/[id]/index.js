import React, {useEffect, useState} from 'react';
import withAuth from '../../../HOC/withAuth';
import styles from './index.module.scss';
import authService from "../../../services/auth.service";
import { useRouter } from "next/router";
import {FaChevronLeft} from "react-icons/fa";
import Link from 'next/link';

const Index = () => {

    const router = useRouter();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const id = router.query.id;
        authService.getMovie(id)
            .then(data => {
                setMovie(data)
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <div className={styles.watch__movie}>
            <Link href='/browser'>
                <a><FaChevronLeft className={styles.go_back} /></a>
            </Link>
            <div className={styles.video}>
                <iframe width="100%" height="800" src={`${movie.video}?autoplay=1&loop=1&showinfo=0&controls=1&rel=0&modestbranding=1`} title={movie.title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default withAuth(Index);
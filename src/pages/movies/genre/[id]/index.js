import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import authService from "../../../../services/auth.service";
import TitlePage from '../../../../components/UI/TitlePage/TitlePage';
import MovieCard from '../../../../components/movie/MovieCard/MovieCard';
import { useRouter } from "next/router";
import Link from 'next/link';
const Index = () => {
    const [category, setCategory] = useState({});
    const [movies, SetAllMovie] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const id = router.query.id;
        authService.getMoviesByCategory(id)
            .then(data => {
                SetAllMovie(data)
            })
            .catch(err => console.log(err));
        authService.getCategory(id)
            .then(data => {
                setCategory(data)
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <div className={styles.movies__category}>
            <ul className={styles.breadcrumb}>
                <li>
                    <Link href="/movies">
                        <a>Films</a>
                    </Link>
                </li>
                <li>
                    <TitlePage title={category.title}></TitlePage>
                </li>
            </ul>
            <div className={styles.movie__grid}>
                {
                    movies.map((movie) => (
                        <MovieCard movie={movie} key={movie._id} />
                    ) )
                }
            </div>
        </div>
    );
};

export default Index;
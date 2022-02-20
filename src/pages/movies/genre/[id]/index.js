import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import authService from "../../../../services/auth.service";
import TitlePage from '../../../../components/UI/TitlePage/TitlePage';
import MovieCard from '../../../../components/movie/MovieCard/MovieCard';
import MovieModal from '../../../../components/movie/MovieModal/MovieModal';
import { useRouter } from "next/router";
import Link from 'next/link';


const Index = () => {
    const [category, setCategory] = useState({});
    const [movies, SetAllMovie] = useState([]);
    const router = useRouter();

    const [displayMovieModal, setDisplayModal] = useState(false);
    const [movie, setMovie] = useState({});

    const movieModal = (movie) =>{
        setMovie(movie);
        setDisplayModal(!displayMovieModal)
    }

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
                        <MovieCard movie={movie} key={movie._id} onClick={() => movieModal(movie)} />
                    ) )
                }
            </div>
            { displayMovieModal === true ? <MovieModal movie={movie} onClick={() => movieModal(movie)}  /> : null}
        </div>
    );
};

export default Index;
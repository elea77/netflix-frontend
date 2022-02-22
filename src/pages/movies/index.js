import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import authService from 
"../../services/auth.service";
import {AiOutlineCaretDown} from 'react-icons/ai'
import Link from 'next/link';
import TitlePage from '../../components/UI/TitlePage/TitlePage';
import MovieCard from '../../components/movie/MovieCard/MovieCard';
import MovieModal from '../../components/movie/MovieModal/MovieModal';
import withAuth from '../../HOC/withAuth';

const Index = () => {
    const [movies, SetAllMovie] = useState([]);
    const [categories, SetAllCategory] = useState([]);
    
    const [displayMovieModal, setDisplayModal] = useState(false);
    const [movie, setMovie] = useState({});

    const movieModal = (movie) =>{
        setMovie(movie);
        setDisplayModal(!displayMovieModal)
    }

    useEffect(() => {
        authService.getAllMovies()
            .then(data => {
                SetAllMovie(data)
            })
            .catch(err => console.log(err));
        authService.getAllCategories()
            .then(data => {
                SetAllCategory(data)
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <div className={styles.movies}>
            <div className={styles.header__page}>
                <TitlePage title='Films'></TitlePage>
                <div className={styles.category__menu}>
                    <div className={styles.menu__button}>Genres <AiOutlineCaretDown /></div>
                    <div className={styles.menu__content}>
                        {
                            categories.map((category) => (
                                <Link href={`/movies/genre/${category._id}`} key={category._id}>
                                    <a>{category.title}</a>
                                </Link>
                            ) )
                        }
                    </div>
                </div>
            </div>
            <div className={styles.movie__grid}>
                {
                    movies.map((movie) => (
                        <div key={movie._id} className={styles.movie__card}> 
                            <MovieCard movie={movie} onClick={() => movieModal(movie)} />
                        </div>
                    ) )
                }
            </div>
            { displayMovieModal === true ? <MovieModal movie={movie} onClick={() => movieModal(movie)}  /> : null}
        </div>
    );
};

// export default withAuth(Index);
export default Index;
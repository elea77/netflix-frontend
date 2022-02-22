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
    const [wishID, setIdWish] = useState();
    const [movies, SetAllMovie] = useState([]);
    
    const [displayMovieModal, setDisplayModal] = useState(false);
    const [movie, setMovie] = useState({});

    const movieModal = (movie) =>{
        setMovie(movie);
        setDisplayModal(!displayMovieModal)
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);
    },[]);

    return (
        <div className={styles.wishlist}>
            <div className={styles.header__page}>
                <TitlePage title='Ma liste'></TitlePage>
            </div>
            <div className={styles.movie__grid}>
                {/* {
                    movies.map((movie) => (
                        <MovieCard movie={movie} key={movie._id} onClick={() => movieModal(movie)} />
                    ) )
                } */}
            </div>
            { displayMovieModal === true ? <MovieModal movie={movie} onClick={() => movieModal(movie)}  /> : null}
        </div>
    );
};

export default Index;
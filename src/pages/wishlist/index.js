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
    const [wishlist, SetMovieWishlist] = useState([]);
    
    const [displayMovieModal, setDisplayModal] = useState(false);
    const [movie, setMovie] = useState({});
    
    const movieModal = (movie) =>{
        setMovie(movie);
        setDisplayModal(!displayMovieModal)
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        authService.getUser(token)
            .then(data => {
                const wishID = data.wishlist[0];
                authService.getWishlist(wishID, token)
                    .then(data => {
                        SetMovieWishlist(data.movies);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <div className={styles.wishlist}>
            <div className={styles.header__page}>
                <TitlePage title='Ma liste'></TitlePage>
            </div>
            <div className={styles.movie__grid}>
                {
                    wishlist.map((movie) => (
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

export default withAuth(Index);
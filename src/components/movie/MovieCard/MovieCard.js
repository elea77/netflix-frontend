import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "./MovieCard.module.scss";
import { FaPlay } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import authService from "../../../services/auth.service";

const MovieCard = (props) => {

    const [userId, setUserId] = useState();
    const [userMovies, setUserMovies] = useState([]);
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        authService.getUser(token)
            .then(data => {
                setUserId(data._id);
                setUserMovies(data.wishlist.movies);
            })
            .catch(err => console.log(err));
        
    },[userMovies]);

    
    const addMovieToWishlist = () => {
        const body = {
            user: userId,
            movies: props.movie._id
        }
        authService.addElementToWishlist(body, token)
        .then(data => {
            if (data.message) {
                setError(true);
                setErrorMessage(data.message);
                return false;
            }
        })
        .catch((err) => {
            setError(true);
            setErrorMessage(err.message)
        });
    }
    
    const removeMovieToWishlist = () => {
        const body = {
            user: userId,
            movies: props.movie._id
        }
        authService.removeElementToWishlist(body, token)
        .then(data => {
            if (data.message) {
                setError(true);
                setErrorMessage(data.message);
                return false;
            }
        })
        .catch((err) => {
            setError(true);
            setErrorMessage(err.message)
        });
    }

    return (
        <>
            <div className={styles.movie__card} key={props.movie.id}>
                { props.movie.img ? <img onClick={props.onClick} src={props.movie.img} alt={props.movie.title} className={styles.movie__img} /> : <img src="https://fakeimg.pl/300x400/" alt={props.movie.title} className={styles.movie__img} /> }
                <div className={styles.movie__info}>
                    <div className={styles.movie__buttons}>
                        <Link href={`/watch/${props.movie._id}`}>
                            <a className={styles.play}>
                                <FaPlay />
                            </a>
                        </Link>
                        { userMovies.includes(props.movie._id) ? 
                            <div onClick={() => removeMovieToWishlist()} className={styles.add}>
                                <BsCheck2 />
                            </div>
                            :  
                            <div onClick={() => addMovieToWishlist()} className={styles.add}>
                                <AiOutlinePlus />
                            </div>
                        }
                        
                        <div onClick={props.onClick} className={styles.more}>
                            <FiChevronDown />
                        </div>
                    </div>
                    <p className={styles.recommandation}>Recommandé à 86%</p>
                    <p className={styles.duration}>{props.movie.duration}</p>
                </div>
            </div>
        </>
    );
};

export default MovieCard;
import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "./MovieCard.module.scss";
import { FaPlay } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import authService from "../../../services/auth.service";

const MovieCard = (props) => {

    const [userId, setUserId] = useState();
    const token = localStorage.getItem('token');

    useEffect(() => {
        authService.getUser(token)
            .then(data => {
                setUserId(data._id);
            })
            .catch(err => console.log(err));
    },[]);

    
    const addMovieToWishlist = (e) => {
        e.preventDefault();
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
            console.log(data);
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
                        <div  onClick={(e) => addMovieToWishlist(e)} className={styles.add}>
                            <AiOutlinePlus />
                        </div>
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
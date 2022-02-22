import React from "react";
import Link from "next/link";
import styles from "./MovieCard.module.scss";
import { FaPlay } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";


const MovieCard = (props) => {
    
    return (
        <>
            <div className={styles.movie__card} key={props.movie.id}>
                { props.movie.img ? <img src={props.movie.img} alt={props.movie.title} className={styles.movie__img} /> : <img src="https://fakeimg.pl/300x400/" alt={props.movie.title} className={styles.movie__img} /> }
                <div className={styles.movie__info}>
                    <div className={styles.movie__buttons}>
                        <Link href=''>
                            <a className={styles.play}>
                                <FaPlay />
                            </a>
                        </Link>
                        <div onClick="" className={styles.add}>
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
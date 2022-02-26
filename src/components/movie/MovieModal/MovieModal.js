import React from "react";
import Link from "next/link";
import styles from "./MovieModal.module.scss";
import { FaPlay } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const MovieModal = (props) => {
  
    return (
        <div className={styles.movie__modal}>
            <div className={styles.modal__content} key={props.movie.id}>
                <VscChromeClose className={styles.close} onClick={props.onClick} />
                <div className={styles.movie__img}>
                    { props.movie.img ? <img src={props.movie.img} alt={props.movie.title} className={styles.movie__img} /> : <img src="https://fakeimg.pl/300x400/" alt={props.movie.title} className={styles.movie__img} /> }
                    <div className={styles.billboard}>
                        <div className={styles.buttons}>
                            <Link href={`/watch/${props.movie._id}`}>
                                <a className={styles.btn_play}><FaPlay /> Lecture</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.movie__info}>
                    <div className={styles.movie__details}>
                        <p className={styles.recommandation}>Recommandé à 86%</p>
                        <p className={styles.date}>{props.movie.date}</p>
                        <p className={styles.duration}>{props.movie.duration}</p> 
                    </div>
                    <p className={styles.description}>{props.movie.description}</p> 
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
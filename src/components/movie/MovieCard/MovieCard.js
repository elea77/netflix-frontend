import React, {useContext} from "react";
import Link from "next/link";
// import CartContext from "../../../context/CartContext";
import styles from "./MovieCard.module.scss";
import { FaPlay } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";


const MovieCard = (props) => {

//   const { addItem, removeItem } = useContext(CartContext);
  
  return (
    <div className={styles.movie__card} key={props.movie.id}>
        {/* <img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img> */}
        { props.movie.img ? <img src={props.movie.img} alt={props.movie.title} className={styles.movie__img} /> : <img src="https://fakeimg.pl/300x400/" alt={props.movie.title} className={styles.movie__img} /> }
        <div className={styles.movie__info}>
            <div className={styles.movie__buttons}>
                <Link href=''>
                    <a className={styles.play}>
                        <FaPlay />
                    </a>
                </Link>
                <Link href={`/movie/${props.movie.id}`}>
                    <a className={styles.more}>
                        <FiChevronDown />
                    </a>
                </Link>
            </div>
            <p className={styles.recommandation}>Recommandé à 86%</p>
            
        </div>
    </div>
  );
};

export default MovieCard;
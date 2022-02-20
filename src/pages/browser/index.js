import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import styles from './index.module.scss';
import { FaPlay } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { GrCircleInformation } from "react-icons/gr";
import { useRouter } from "next/router";
import authService from "../../services/auth.service";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MovieCard from '../../components/movie/MovieCard/MovieCard';
import MovieModal from '../../components/movie/MovieModal/MovieModal';

const Index = () => {
    const [movies, SetAllMovie] = useState([]);

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
    },[]);

    return (
        <div>
            <div className={styles.motion__background}>
                <div className={styles.background}></div>
                <iframe width="100%" height="800" src="https://www.youtube.com/embed/DzCzUEhPI_Q?autoplay=1&loop=1&showinfo=0&controls=0&rel=0&modestbranding=1" title="Désenchantée" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  frameBorder="0" allowFullScreen></iframe>
                <div className={styles.billboard}>
                    <img src='https://www.pikpng.com/pngl/b/569-5694162_mrs-mr-and-mrs-smith-clipart.png' />
                    <p>Description</p>
                    <div className={styles.buttons}>
                        <Link href='/'>
                            <a className={styles.btn_play}><FaPlay /> Lecture</a>
                        </Link>
                        <Link href='/'>
                            <a className={styles.btn_info}><GrCircleInformation /> Plus {`d'infos`}</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={5}
                    slidesPerGroup={6}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.swiper}>
                    {
                        movies.map((movie) => (
                            <SwiperSlide className={styles.swiper__slide} key={movie._id}>
                                <MovieCard movie={movie} onClick={() => movieModal(movie)} />
                            </SwiperSlide>
                        ) )
                    }
                </Swiper>
            </div>
            { displayMovieModal === true ? <MovieModal movie={movie} onClick={() => movieModal(movie)}  /> : null}
        </div>
    );
};

export default Index;
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { useRouter } from "next/router";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Index = ({authorized}) => {
    const router = useRouter();
    
    // if(!authorized) {
    //     router.push("/login");
    // }

    return (
        <div>
            <div className={styles.motion__background}>
                <div className={styles.background}></div>
                {/* <img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img> */}
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
                    spaceBetween={100}
                    slidesPerGroup={6}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.swiper}>
                    <SwiperSlide className={styles.swiper__slide}><img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img></SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}><img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img></SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}><img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img></SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}><img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img></SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}><img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img></SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}><img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img></SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}><img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img></SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}><img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img></SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}><img src='https://images.rtl.fr/~c/2000v2000/rtl/www/1474182-red-notice-sur-netflix.jpg'></img></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Index;
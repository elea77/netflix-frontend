import React from 'react';
import SubHeader from '../../components/header/SubHeader/SubHeader';
import styles from './index.module.scss';
import LogoImg from '../../assets/images/Netflix-logo.png';
const Index = () => {
    return (
        <div className={styles.test}>
            <SubHeader title="Films"></SubHeader>
            <div className={styles.wrapper}>
                <section id="section1">
                    <a href="#section3" className={styles.arrow__btn}>‹</a>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />
                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />
                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />
                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />
                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />
                    </div>
                    <a href="#section2" className={styles.arrow__btn}>›</a>
                </section>
                <section id="section2">
                    <a href="#section1" className={styles.arrow__btn}>‹</a>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <a href="#section3" className={styles.arrow__btn}>›</a>
                </section>
                <section id="section3">
                    <a href="#section2" className={styles.arrow__btn}>‹</a>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <div className={styles.item}>
                        <img src={LogoImg.src} alt="Netflix" />

                    </div>
                    <a href="#section1" className={styles.arrow__btn}>›</a>
                </section>
            </div>


        </div>
    );
};

export default Index;
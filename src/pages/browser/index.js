import React from 'react';
import styles from './index.module.scss';

const Index = () => {
    return (
        <div>
            <div className={styles.motion__background}>
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/CvkgQbTGZ7c?autoplay=1&loop=1&showinfo=0&controls=0&rel=0&modestbranding=1" title="Désenchantée" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className={styles.wrapper}>
                
            </div>
        </div>
    );
};

export default Index;
import React, {useEffect, useState} from 'react';
import withAuth from '../../HOC/withAuth';
import styles from './index.module.scss';

const Index = () => {


    return (
        <div className={styles.watch}>
            <iframe width="100%" height="800" src="https://www.youtube.com/embed/DzCzUEhPI_Q?autoplay=1&loop=1&showinfo=0&controls=0&rel=0&modestbranding=1" title="Désenchantée" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  frameBorder="0" allowFullScreen></iframe>
        </div>
    );
};

export default withAuth(Index);
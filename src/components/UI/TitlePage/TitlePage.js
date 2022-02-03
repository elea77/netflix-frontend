import React from 'react';
import styles from './TitlePage.module.scss';

const TitlePage = (props) => {
    return (
        <div className={styles.title__page}>
            <h1 className={props.className}>{props.title}</h1>
        </div>
    );
};

export default TitlePage;

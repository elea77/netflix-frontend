import React from 'react';
import styles from "./SubHeader.module.scss";
import TitlePage from '../../UI/TitlePage/TitlePage';

const SubHeader = (props) => {
    return (
        <div className={styles.sub__header}>
            <TitlePage title={props.title}></TitlePage>
        </div>
    );
};

export default SubHeader;
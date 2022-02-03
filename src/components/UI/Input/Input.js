import React from 'react';
import styles from "./Input.module.scss";

const Input = (props) => {
    return (
        <div className={styles.input__form}>
            <input type={props.type} value={props.value} placeholder={props.placeholder} id={props.id} required={props.required} name={props.name} onChange={props.onChange} className={props.className} />
        </div>
    );
};

export default Input;
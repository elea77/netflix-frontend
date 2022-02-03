import React from 'react';
import styles from "./InputLabel.module.scss";

const InputLabel = (props) => {
    return (
        <div className={styles.input__form}>
            <input type={props.type} value={props.value} placeholder={props.placeholder} id={props.id} required={props.required} name={props.name} onChange={props.onChange} className={props.className} />
            <label>{props.label}</label>
        </div>
    );
};

export default InputLabel;
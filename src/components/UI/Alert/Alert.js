import React from 'react';

const Alert = (props) => {
    return (
        <div className={props.className}>{props.text}</div>
    );
};

export default Alert;
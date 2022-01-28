import React from 'react';

const TitlePage = (props) => {
    return (
        <div className='title__page'>
            <h1 className={props.className}>{props.title}</h1>
        </div>
    );
};

export default TitlePage;

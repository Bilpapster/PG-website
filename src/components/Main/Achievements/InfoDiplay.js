import React from 'react';

const InfoDisplay = (props) => {
    return (
        <div className={`inline-flex font-kalam p-1 ${props.classes || ''}`}>
            {props.svg}
            <span className='inline text-lg pl-2'>{props.text}</span>
        </div>
    );
};

export default InfoDisplay;
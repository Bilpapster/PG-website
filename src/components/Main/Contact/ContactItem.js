import React from 'react';

const ContactItem = (props) => {
    return (
        <div className='contact-item group'>
            {props.svg}
            <a href={props.link} target='_blank'>{props.label}</a>
        </div>
    );
};

export default ContactItem;
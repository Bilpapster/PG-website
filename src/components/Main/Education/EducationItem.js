import React from 'react';

const EducationItem = (props) => {
    return (
        <div className='education-item'>
            <span className='inline-block'>
                <div>
                    <ul className='list-disc mb-2 flex items-center'>
                        <li>
                            <span className='item-title inline-block items-center pt-2'>{props.title}</span>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-between'>
                    <span className='item-info item-dates'>{`${props.start} - ${props.end}`}</span>
                    <span className='item-info'>{props.about}</span>
                </div>
            </span>
        </div>
    );
};

export default EducationItem;
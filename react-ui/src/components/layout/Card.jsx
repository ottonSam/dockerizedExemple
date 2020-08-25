import React from 'react';

import './Card.css';

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F27',
        borderColor: props.color || '#F27',
        maxWidth: props.maxWidth || '',
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">
                {props.title}
            </div>
            <div className="Content">
                { props.children }
            </div>
        </div>
    );
};
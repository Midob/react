import React from 'react'

const validation = (props) => {
    let message = (props.textLength >= 5) ? "Text long enough" : "Text too short";

    return (
        <div className="Validation">
            <p>Length of entered text: {props.textLength}</p>
            <p>{message}</p>
        </div>
    )
};

export default validation;
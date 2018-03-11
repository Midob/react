import React from 'react'

const validationComponent = (props) => {
    let message = (props.textLength >= 5) ? "Text long enough" : "Text too short";

    return (
        <div className="ValidationComponent">
            <p>Length of entered text: {props.textLength}</p>
            <p>{message}</p>
        </div>
    )
};

export default validationComponent;
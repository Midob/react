import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '1px solid #ccc',
        padding: '10px'
    };

    return (
        <div className="UserInput">
            <input type="text" onChange={props.changed} value={props.currentName} style={inputStyle} />
        </div>
    )
};

export default userInput;
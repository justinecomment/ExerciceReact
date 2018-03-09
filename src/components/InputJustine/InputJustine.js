import React from 'react';


const InputJustine = (props) => {

    let inputElement = null;

    switch (props.inputType) {
        case ('input'):
            inputElement =
                <input
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea />
            break;
        default:
            inputElement =
                <input
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} />

    }

    return (
        <div>
            {inputElement}
        </div>
    );
}

export default InputJustine;
import React from "react";
import './numeric-min-max.scss';

const NumericMinMax = ({min, max, value, onChange}) => {    
    const isValid = newValue => !isNaN(newValue) && newValue >= min && newValue <= max;

    const tryChangeValue = (newValue) => {
        if(isValid(newValue)){
            onChange(newValue);
        }
    };
    
    const input = event => tryChangeValue(Number(event.target.value));

    const up = () => tryChangeValue(value + 1);    

    const down = () => tryChangeValue(value - 1);
    
    return (    
        <span className="numeric-input__container">
            <input onChange={input} className="numeric-input__input" pattern="[0-9]+" value={value} />
            <button onClick={up} className="numeric-input__button numeric-input__button_up">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 9L8 7L10 9" stroke="#CACDD8" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
            </button>
            <button onClick={down} className="numeric-input__button numeric-input__button_down">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 7L8 9L6 7" stroke="#CACDD8" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
            </button>
        </span>
    );
};

export default NumericMinMax;
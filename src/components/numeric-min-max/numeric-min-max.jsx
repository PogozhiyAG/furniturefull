import React, { useState } from "react";
import './numeric-min-max.css';

const NumericMinMax = ({min, max, value, onchange}) => {
    const [current, setCurrent] = useState(value);

    const trySetValue = (newValue) => {
        const number = Number(newValue);
        if(isNaN(number)){
            return;
        }
        if(number < min || number > max){
            return;
        }
        setCurrent(number);
        if(onchange){
            onchange(number);
        }
    };

    const onCountChangeHandler = (event) => trySetValue(event.target.value);

    const up = () => trySetValue(current + 1);

    const down = () => trySetValue(current - 1);
    
    return (    
        <span className="numeric-input__container">
            <input onInput={onCountChangeHandler} className="numeric-input__input" pattern="[0-9]+" value={current} />
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
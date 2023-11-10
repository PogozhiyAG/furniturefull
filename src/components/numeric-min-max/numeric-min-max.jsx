import React, { useState, useEffect } from "react";
import './numeric-min-max.css';

const NumericMinMax = ({min, max, initialValue, onchange}) => {
    const [current, setCurrent] = useState(initialValue);

    useEffect(() => {
        if(onchange){
            onchange(current);
        }
    }, [current]);

    const isValid = value => !isNaN(value) && value >= min && value <= max;
    
    const trySetValue = (last, newValue) => {
        if(isValid(newValue)){
            return newValue;
        }
        return last;
    };

    const input = event => setCurrent(last => trySetValue(last, Number(event.target.value)));

    const up = () => setCurrent(last => trySetValue(last, last + 1));

    const down = () => setCurrent(last => trySetValue(last, last - 1));
    
    return (    
        <span className="numeric-input__container">
            <input onInput={input} className="numeric-input__input" pattern="[0-9]+" value={current} />
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
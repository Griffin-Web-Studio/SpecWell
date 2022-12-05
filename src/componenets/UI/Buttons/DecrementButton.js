// DecrementButton.js
import React, { useState, useEffect } from "react";

const DecrementButton = (props) => {
    const { value, onChange } = props;
    const [isDecrementing, setIsDecrementing] = useState(false);
    const [firstDecrementDone, setFirstDecrementDone] = useState(false);
    const [madeFirstDecrement, setMadeFirstDecrement] = useState(false);

    useEffect(() => {
        setFirstDecrementDone(false);
        setMadeFirstDecrement(false);
    }, [isDecrementing]);

    useEffect(() => {
        let interval = null;
        let timeout = null;
        
        if (isDecrementing) {
            if (!firstDecrementDone) {
                if (!madeFirstDecrement) {
                    setMadeFirstDecrement(true);
                    onChange(value - 1);
                } else {
                    timeout = setTimeout(() => {
                        setFirstDecrementDone(true);
                    }, props.firstDelay);
                }
            } else {
                interval = setInterval(() => {
                    onChange(value - Number(props.decreaseAmount));
                }, props.interval);
            }
        } else if (!isDecrementing && value !== 0) {
            clearInterval(interval);
            clearTimeout(timeout);
        }
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isDecrementing, value, firstDecrementDone, madeFirstDecrement, onChange, props.decreaseAmount, props.firstDelay, props.interval]);

    return (
        <button
            type="button"
            className="gwssc-button gwssc-button__secondary-alt gwssc-button__secondary-alt--short gwssc-button__secondary-alt--short--radius-bottom-right"
            onMouseDown={() => setIsDecrementing(true)}
            onMouseUp={() => setIsDecrementing(false)}
            onMouseLeave={() => setIsDecrementing(false)}
            onClick={() => false}>
            -
        </button>
    );
};

export default DecrementButton;

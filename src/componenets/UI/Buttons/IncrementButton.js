// IncrementButton.js
import React, { useState, useEffect } from "react";

const IncrementButton = (props) => {
    const { value, onChange, maxValue } = props;
    const [isIncrementing, setIsIncrementing] = useState(false);
    const [firstIncrementDone, setFirstIncrementDone] = useState(false);
    const [madeFirstIncrement, setMadeFirstIncrement] = useState(false);

    useEffect(() => {
        setFirstIncrementDone(false);
        setMadeFirstIncrement(false);
    }, [isIncrementing]);

    useEffect(() => {
        let interval = null;
        let timeout = null;
        if (isIncrementing) {
            if (!firstIncrementDone) {
                if (!madeFirstIncrement) {
                    setMadeFirstIncrement(true);

                    if (maxValue === "infinity") {
                        onChange(value + Number(props.increaseAmount));
                    } else {
                        if (value < maxValue) {
                            onChange(value + Number(props.increaseAmount));
                        }
                    }

                } else {
                    timeout = setTimeout(() => {
                        setFirstIncrementDone(true);
                    }, props.firstDelay);
                }
            } else {
                interval = setInterval(() => {
                    if (maxValue === "infinity") {
                        onChange(value + Number(props.increaseAmount));
                    } else {
                        if (value < maxValue) {
                            onChange(value + Number(props.increaseAmount));
                        }
                    }
                }, props.interval);
            }
        } else if (!isIncrementing && value !== 0) {
            clearInterval(interval);
            clearTimeout(timeout);
        }
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [maxValue, isIncrementing, value, firstIncrementDone, madeFirstIncrement, onChange, props.increaseAmount, props.firstDelay, props.interval]);

    return (
        <button
            type="button"
            className="gwssc-button gwssc-button__alt gwssc-button__alt--short gwssc-button__alt--short--radius-top-right"
            onMouseDown={() => setIsIncrementing(true)}
            onMouseUp={() => setIsIncrementing(false)}
            onMouseLeave={() => setIsIncrementing(false)}
            onClick={() => false}>
            +
        </button>
    );
};

export default IncrementButton;

import React, { useState } from 'react';
import DecrementButton from '../Buttons/DecrementButton';
import IncrementButton from '../Buttons/IncrementButton';

export default function NumberIncDec(props) {
    const [inputValue, setInputValue] = useState(props.value);

    return (
        <div className="gwssc-grid col-4 gap-col-2">
            <div className="gwssc-grid-4">
                <label for={props.id} className="gwssc-label">
                    {props.label}
                </label>
            </div>

            <div className="gwssc-grid-3">
                <input
                    type="number"
                    id={props.id}
                    name={props.id}
                    className="gwssc-input full-height gwssc-input--radius-left"
                    value={inputValue}
                    onChange={setInputValue}
                />
            </div>

            <div className="gwssc-grid col-1 gwssc-grid-1 gap-row-2">
                <div className="gwssc-grid-1">
                    <IncrementButton value={inputValue} onChange={setInputValue} increaseAmount="1" interval="20" firstDelay="500" />
                </div>

                <div className="gwssc-grid-1">
                    <DecrementButton value={inputValue} onChange={setInputValue} decreaseAmount="1" interval="20" firstDelay="500" />
                </div>
            </div>
        </div>
    );
}

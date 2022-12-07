import React, { useState } from "react";

export default function SpecOpacityChanger(props) {
    const { onChange, specOptions } = props
    const queryParameters = new URLSearchParams(window.location.search)
    const specOpacity = (queryParameters.get("spec-opacity") !== null) ? Number(queryParameters.get("spec-opacity")) : 0.3;
    const [value, setValue] = useState(specOpacity);
    let queryURL = new URL(specOptions.currentUrl);

    const OnIncrementHandler = (e) => {
        e.preventDefault();
        const newValue = value + 0.1;

        if (value < 1) {
            updateValue(newValue)
        }
    }

    const OnDecrementHandler = (e) => {
        e.preventDefault();
        const newValue = value - 0.1;

        if (value > 0) {
            updateValue(newValue)
        }
    }

    const onSelectHandler = (e) => {
        const newValue = Number(e.target.value);

        updateValue(newValue)
    }

    const updateValue = (newValue) => {
        setValue(newValue);

        if (newValue > 0) {
            queryURL.searchParams.set("spec-opacity", newValue);
        } else {
            queryURL.searchParams.delete("spec-opacity");
        }
        onChange({ specOpacity: newValue, frameIsLoaded: true }, queryURL);
    }

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">

                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label htmlFor="spec-opacity">
                            Spec Image Opacity
                        </label>
                    </legend>
                </div>

                <div className="gwssc-grid-6">{/*Spacer*/}</div>

                <div className="gwssc-grid-3">
                    <button className="gwssc-button gwssc-button--radius-top"
                        onClick={OnIncrementHandler}>
                        +
                    </button>
                </div>

                <div className="gwssc-grid-3">
                    <button className="gwssc-button gwssc-button__secondary--radius-top gwssc-button__secondary"
                        onClick={OnDecrementHandler}>
                        -
                    </button>
                </div>

                <div className="gwssc-grid-24">
                    <div className="gwssc-input-wrap gwssc-input-wrap--radius-bottom">
                        <div className="gwssc-input gwssc-input--radius-bottom">
                            <input
                                type="range"
                                id="spec-opacity"
                                name="spec-opacity"
                                className="spec-opacity"
                                value={value}
                                min="0"
                                max="1"
                                step="0.1"
                                onChange={onSelectHandler}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </fieldset>
    )
}
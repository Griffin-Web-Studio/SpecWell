import React, { useState } from "react";
import MediaOptions from "./InputGroups/MediaOptions";
import SpecCheckerCommunication from "./InputGroups/SpecCheckerCommunication";
import SpecOpacityChanger from "./InputGroups/SpecOpacityChanger";
import SpecPositionAdjust from "./InputGroups/SpecPositionAdjust";
import WebsiteFrameLoader from "./InputGroups/WebsiteFrameLoader";
import WebsiteSpecLoader from "./InputGroups/WebsiteSpecLoader";

export default function FormWrapper(props) {
    const { onFormChange } = props
    const queryParameters = new URLSearchParams(window.location.search)
    const [options, setOptions] = useState({
        currentUrl: new URL(window.location.origin),
        frameIsLoaded: false,
        specIsLoaded: false,
        frameSrc: queryParameters.get("production-site") !== null ? queryParameters.get("production-site") : "",
        specSrc: queryParameters.get("spec-img") !== null ? queryParameters.get("spec-img") : "",
        specYAxis: 0,
        specXAxis: 0,
        mediaWidth: 320,
        mediaZoom: 100,
    });

    const onSpecOptionsChangeHandler = (newOptions, newQueryURL) => {
        let updatedOptions = { ...options, ...newOptions };

        console.log(options.currentUrl)

        setOptions((oldOptions) => ({...oldOptions, ...newOptions, currentUrl: newQueryURL.toString() }));
        onFormChange(updatedOptions);
        window.history.replaceState({}, "Spec Checker Tool", newQueryURL.toString());
    };

    return (
        <form method="get" className="gwssc-form">
            <div className="gwssc-grid col-1 gap-row-20">
                <div className="gwssc-grid-1">
                    <WebsiteFrameLoader specOptions={options} onChange={onSpecOptionsChangeHandler} />
                </div>

                <div className="gwssc-grid-1">
                    <WebsiteSpecLoader specOptions={options} onChange={onSpecOptionsChangeHandler} />
                </div>

                {options.specIsLoaded && options.frameIsLoaded ? (
                    <div className="gwssc-grid-1">
                        <SpecOpacityChanger specOptions={options} onChange={onSpecOptionsChangeHandler} />
                    </div>
                ) : null}

                {options.specIsLoaded && options.frameIsLoaded ? (
                    <div className="gwssc-grid-1">
                        <SpecPositionAdjust specOptions={options} onChange={onSpecOptionsChangeHandler} />
                    </div>
                ) : null}

                {options.specIsLoaded && options.frameIsLoaded ? (
                    <div className="gwssc-grid-1">
                        <MediaOptions  specOptions={options} onChange={onSpecOptionsChangeHandler} />
                    </div>
                ) : null}

                <div className="gwssc-grid-1">
                    <SpecCheckerCommunication  specOptions={options} onChange={onSpecOptionsChangeHandler} />
                </div>
            </div>
        </form>
    );
}

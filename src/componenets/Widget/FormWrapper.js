import React, { useState } from "react";
import MediaOptions from "./InputGroups/MediaOptions";
import SpecCheckerCommunication from "./InputGroups/SpecCheckerCommunication";
import SpecOpacityChanger from "./InputGroups/SpecOpacityChanger";
import SpecPositionAdjust from "./InputGroups/SpecPositionAdjust";
import WebsiteFrameLoader from "./InputGroups/WebsiteFrameLoader";
import WebsiteSpecLoader from "./InputGroups/WebsiteSpecLoader";

export default function FormWrapper(props) {
    const { onFormChange } = props,
        queryParameters = new URLSearchParams(window.location.search),
        [queryURL, setQueryURL] = useState(new URL(window.location.origin)),
        [options, setOptions] = useState({
            frameIsLoaded: false,
            specIsLoaded: false,
            frameSrc: queryParameters.get("production-site") !== null ? queryParameters.get("production-site") : "",
            specSrc: queryParameters.get("spec-img") !== null ? queryParameters.get("spec-img") : ""
        });

    const onSpecOptionsChangeHandler = (newOptions, newQueryURL, frameIsLoaded) => {
        let updatedOptions = { ...options, ...newOptions };

        setOptions((oldOptions) => ({ ...oldOptions, ...newOptions }));
        setQueryURL(newQueryURL.toString());
        onFormChange(updatedOptions);
        window.history.replaceState({}, "Spec Checker Tool", newQueryURL.toString());
    };

    return (
        <form method="get" className="gwssc-form">
            <div className="gwssc-grid col-1 gap-row-20">
                <div className="gwssc-grid-1">
                    <WebsiteFrameLoader specOptions={options} currentQueryURL={queryURL} onChange={onSpecOptionsChangeHandler} />
                </div>

                <div className="gwssc-grid-1">
                    <WebsiteSpecLoader specOptions={options} currentQueryURL={queryURL} onChange={onSpecOptionsChangeHandler} />
                </div>

                {options.specIsLoaded && options.frameIsLoaded ? (
                    <div className="gwssc-grid-1">
                        <SpecOpacityChanger />
                    </div>
                ) : null}

                {options.specIsLoaded && options.frameIsLoaded ? (
                    <div className="gwssc-grid-1">
                        <SpecPositionAdjust />
                    </div>
                ) : null}

                {options.specIsLoaded && options.frameIsLoaded ? (
                    <div className="gwssc-grid-1">
                        <MediaOptions />
                    </div>
                ) : null}

                <div className="gwssc-grid-1">
                    <SpecCheckerCommunication />
                </div>
            </div>
        </form>
    );
}

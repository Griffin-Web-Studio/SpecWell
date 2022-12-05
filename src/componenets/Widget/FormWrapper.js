import React, { useState } from "react";
import MediaOptions from "./InputGroups/MediaOptions";
import SpecCheckerCommunication from "./InputGroups/SpecCheckerCommunication";
import SpecOpacityChanger from "./InputGroups/SpecOpacityChanger";
import SpecPositionAdjust from "./InputGroups/SpecPositionAdjust";
import WebsiteFrameLoader from "./InputGroups/WebsiteFrameLoader";
import WebsiteSpecLoader from "./InputGroups/WebsiteSpecLoader";

export default function FormWrapper(props) {
    const {onFormChange} = props,
        queryParameters = new URLSearchParams(window.location.search),
        [queryURL, setQueryURL] = useState(new URL(window.location.origin)),
        [specLoadedStatus, setSpecLoadedStatus] = useState(false),
        [frameLoadedStatus, setFrameLoadedStatus] = useState(false),
        [options, setOptions] = useState({
            frameSrc: queryParameters.get("production-site") !== null ? queryParameters.get("production-site") : "",
            specSrc: queryParameters.get("spec-img") !== null ? queryParameters.get("spec-img") : "",
            "spec-opacity": 0.5,
            "spec-size": "small",
            "spec-z-index": 1000,
            "frame-z-index": 1000
        });

    const onWebsiteFrameLoaderChangeHandler = (newOptions, newQueryURL, frameIsLoaded) => {
        setOptions((oldOptions) => ({ ...oldOptions, ...newOptions }));
        setQueryURL(newQueryURL.toString());
        setFrameLoadedStatus(frameIsLoaded);
        onFormChange(options)
        window.history.replaceState({}, "Spec Checker Tool", newQueryURL.toString());
    };

    const onWebsiteSpecLoaderChangeHandler = (newOptions, newQueryURL, specIsLoaded) => {
        setOptions((oldOptions) => ({ ...oldOptions, ...newOptions }));
        setQueryURL(newQueryURL.toString());
        setSpecLoadedStatus(specIsLoaded);
        onFormChange(options)
        window.history.replaceState({}, "Spec Checker Tool", newQueryURL.toString());
    };

    return (
        <form method="get" className="gwssc-form">
            <div className="gwssc-grid col-1 gap-row-20">
                <div className="gwssc-grid-1">
                    <WebsiteFrameLoader frameOptions={options} currentQueryURL={queryURL} frameLoadedStatus={frameLoadedStatus} onChange={onWebsiteFrameLoaderChangeHandler} value={options.frameSrc} />
                </div>

                <div className="gwssc-grid-1">
                    <WebsiteSpecLoader specOptions={options} currentQueryURL={queryURL} specLoadedStatus={specLoadedStatus} onChange={onWebsiteSpecLoaderChangeHandler} value={options.specSrc} />
                </div>

                {specLoadedStatus && frameLoadedStatus ? (
                    <div className="gwssc-grid-1">
                        <SpecOpacityChanger />
                    </div>
                ) : null}

                {specLoadedStatus && frameLoadedStatus ? (
                    <div className="gwssc-grid-1">
                        <SpecPositionAdjust />
                    </div>
                ) : null}

                {specLoadedStatus && frameLoadedStatus ? (
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

import React, { useContext } from "react";
import { SpecContext } from "../../app/context/SpecOptions";
import { SpecCheckerCredits } from "./InputGroups/Credits";
import { MediaOptions } from "./InputGroups/MediaOptions";
import { SpecCheckerCommunication } from "./InputGroups/SpecCheckerCommunication";
import { SpecOpacityChanger } from "./InputGroups/SpecOpacityChanger";
import { SpecPositionAdjust } from "./InputGroups/SpecPositionAdjust";
import { WebsiteFrameLoader } from "./InputGroups/WebsiteFrameLoader";
import { WebsiteSpecLoader } from "./InputGroups/WebsiteSpecLoader";

export const FormWrapper = () => {
    const { options, setOptions } = useContext(SpecContext);

    const onSpecOptionsChangeHandler = (newOptions, newQueryURL) => {
        setOptions((oldOptions) => ({...oldOptions, ...newOptions, currentUrl: newQueryURL.toString() }));
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

                <div className="gwssc-grid-1">
                    <SpecCheckerCredits />
                </div>
            </div>
        </form>
    );
}

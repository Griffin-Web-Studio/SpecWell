import React, { useState } from "react";
import { ReactComponent as FigmaLogo} from "../../../images/figma-logo.svg";

export const WebsiteSpecLoader = (props) => {
    const { specOptions, onChange } = props;
    const [specImg, setSpecImg] = useState(specOptions.specSrc);

    let queryURL = new URL(specOptions.currentUrl);

    const onSpecChangeHandler = (e) => {
        const specImg = e.target.value;
        setSpecImg(specImg);

        if (specImg !== "") {
            const decodedUrl = decodeURIComponent(specImg);

            const regex = /https:\/\/([\w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?/;
            const isFigmaUrl = regex.test(decodedUrl);

            const newOptions = {
                specIsFigma: isFigmaUrl,
                specIsLoaded: false
            };
            onChange(newOptions, queryURL);
        }
    };

    const onSpecPrimaryFocusHandler = (e) => {
        e.preventDefault();
        const newMouseEventsOn = specOptions.mouseEventsOn === "frame" ? "spec" : "frame";

        queryURL.searchParams.set("mouse-events-on", newMouseEventsOn);
        onChange({ mouseEventsOn: newMouseEventsOn, frameIsLoaded: true }, queryURL);
    };

    const onLoadHandler = (e) => {
        e.preventDefault();

        if (specImg !== "") {
            const decodedUrl = decodeURIComponent(specImg);

            const regex = /https:\/\/([\w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?/;
            const isFigmaUrl = regex.test(decodedUrl);
            queryURL.searchParams.set("spec-img", specImg);
            const newOptions = {
                specSrc: specImg,
                specIsLoaded: true,
                specIsFigma: isFigmaUrl
            };
            onChange(newOptions, queryURL);
        }
    };

    const onUnloadHandler = (e) => {
        e.preventDefault();
        queryURL.searchParams.delete("spec-img");
        onChange({ specSrc: "", specIsLoaded: false }, queryURL);
    };

    const onReloadHandler = (e) => {
        e.preventDefault();

        if (specImg !== "") {
            onChange({ specSrc: "https://files.gwssecureserver.co.uk/files/gws/logo.svg", specIsLoaded: true }, queryURL);

            setTimeout(() => {
                const decodedUrl = decodeURIComponent(specImg);
    
                const regex = /https:\/\/([\w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?/;
                const isFigmaUrl = regex.test(decodedUrl);
                queryURL.searchParams.set("spec-img", specImg);
    
                const newOptions = {
                    specSrc: specImg,
                    specIsLoaded: true,
                    specIsFigma: isFigmaUrl
                };
                onChange(newOptions, queryURL);
            }, 1000);
        }
    };

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">
                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label htmlFor="spec-img">Spec Image URL</label>
                    </legend>
                </div>

                <div className={`gwssc-grid-${specOptions.specIsLoaded ? "5" : "12"}`}>
                    <button className="gwssc-button gwssc-button--radius-top" onClick={onLoadHandler}>
                        Load
                    </button>
                </div>

                {specOptions.specIsLoaded ? (
                    <div className={`gwssc-grid-2`}>
                        <button className="gwssc-button__secondary-alt gwssc-button__secondary-alt--radius-top" onClick={onReloadHandler}>
                            <i className="icon-reset-bold"></i>
                        </button>
                    </div>
                ) : (
                    ""
                )}

                {specOptions.specIsLoaded ? (
                    <div className="gwssc-grid-5">
                        <button className="gwssc-button gwssc-button__secondary--radius-top gwssc-button__secondary" onClick={onUnloadHandler}>
                            Unload
                        </button>
                    </div>
                ) : (
                    ""
                )}

                <div className="gwssc-grid-24">
                    <div className="gwssc-input-wrap gwssc-input-wrap--radius-bottom">
                        <div className="gwssc-grid gap-col-8">
                            {specOptions.specIsFigma && (
                                <div className="gwssc-grid-2 gwssc-flex justify-center">
                                    <FigmaLogo />
                                </div>
                            )}

                            <div className={`gwssc-grid-${specOptions.specIsLoaded ? (specOptions.specIsFigma ? "19" : "24") : (specOptions.specIsFigma ? "19" : "24")}`}>
                                <input
                                    type="url"
                                    id="spec-img"
                                    name="spec-img"
                                    className={`gwssc-input gwssc-input--radius-${specOptions.specIsLoaded ? (specOptions.specIsFigma ? "left" : "bottom") : specOptions.specIsFigma ? "left" : "bottom"}`}
                                    placeholder="https://path.to.spec/image.png"
                                    value={specImg}
                                    onChange={onSpecChangeHandler}
                                />
                            </div>

                            {((specOptions.specIsLoaded && specOptions.specIsFigma) || specOptions.specIsFigma) && (
                                <div className="gwssc-grid-3">
                                    <button className="gwssc-button gwssc-button--radius-right gwssc-button--large-font" onClick={onSpecPrimaryFocusHandler}>
                                        <i className={`icon-focus-${specOptions.mouseEventsOn === "spec" ? "top" : "bottom"}`}></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

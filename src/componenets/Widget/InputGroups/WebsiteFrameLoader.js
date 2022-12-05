import React, { useState } from "react";

export default function WebsiteFrameLoader(props) {
    let { currentQueryURL } = props,
        queryURL = new URL(currentQueryURL);
    const { value, onChange, frameLoadedStatus } = props,
        [frameLoaded, setFrameLoaded] = useState(Boolean(frameLoadedStatus)),
        [productionSite, setProductionSite] = useState(value);

    const onFrameChangeHandler = (e) => {
        setProductionSite(e.target.value);
    };

    const onLoadHandler = (e) => {
        e.preventDefault();
        queryURL.searchParams.set("production-site", productionSite);

        if (productionSite !== "") {
            onChange({ frameSrc: productionSite }, queryURL, true);
            setFrameLoaded(true);
        }
    }

    const onUnloadHandler = (e) => {
        e.preventDefault();
        queryURL.searchParams.delete("production-site");
        onChange({ frameSrc: productionSite }, queryURL, false);
        setFrameLoaded(false);
    }

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">
                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label htmlFor="production-site">Website Frame</label>
                    </legend>
                </div>

                <div className={`gwssc-grid-${frameLoaded ? '6' : '12'}`}>
                    <button className="gwssc-button gwssc-button--radius-top" onClick={onLoadHandler}>
                        Load
                    </button>
                </div>

                {frameLoaded ? (
                    <div className="gwssc-grid-6">
                        <button className="gwssc-button gwssc-button__secondary--radius-top gwssc-button__secondary" onClick={onUnloadHandler}>Unload</button>
                    </div>
                ) : (
                    ""
                )}

                <div className="gwssc-grid-24">
                    <div className="gwssc-input-wrap gwssc-input-wrap--radius-bottom">
                        <input type="url" id="production-site" name="production-site" className="gwssc-input gwssc-input--radius-bottom" placeholder="https://path.to-dev-website.tld" value={productionSite} onChange={onFrameChangeHandler} />
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

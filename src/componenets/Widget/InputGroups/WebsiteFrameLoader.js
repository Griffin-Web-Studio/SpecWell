import React, { useState } from "react";

export default function WebsiteFrameLoader(props) {
    const { specOptions, onChange } = props;
    const [productionSite, setProductionSite] = useState(specOptions.frameSrc);

    let queryURL = new URL(specOptions.currentUrl);

    const onFrameChangeHandler = (e) => {
        setProductionSite(e.target.value);
    };

    const onLoadHandler = (e) => {
        e.preventDefault();

        if (productionSite !== "") {
            queryURL.searchParams.set("production-site", productionSite);
            onChange({ frameSrc: productionSite, frameIsLoaded: true }, queryURL);
        }
    };

    const onUnloadHandler = (e) => {
        e.preventDefault();
        queryURL.searchParams.delete("production-site");
        onChange({ frameSrc: "https://griffin-web.studio", frameIsLoaded: false }, queryURL);
    };

    const onReloadHandler = (e) => {
        e.preventDefault();

        if (productionSite !== "") {
            onChange({ frameSrc: "https://files.gwssecureserver.co.uk/files/gws/logo.svg", frameIsLoaded: true }, queryURL);

            setTimeout(() => {
                queryURL.searchParams.set("production-site", productionSite);
                onChange({ frameSrc: productionSite, frameIsLoaded: true }, queryURL);
            }, 1000);
        }
    };

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">
                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label htmlFor="production-site">Website Frame</label>
                    </legend>
                </div>

                <div className={`gwssc-grid-${specOptions.frameIsLoaded ? "5" : "12"}`}>
                    <button className="gwssc-button gwssc-button--radius-top" onClick={onLoadHandler}>
                        Load
                    </button>
                </div>


                {specOptions.frameIsLoaded ? (
                    <div className={`gwssc-grid-2`}>
                        <button className="gwssc-button__alt gwssc-button__alt--radius-top" onClick={onReloadHandler}>
                            <i class="icon-reset-bold"></i>
                        </button>
                    </div>
                ) : (
                    ""
                )}

                {specOptions.frameIsLoaded ? (
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
                        <input type="url" id="production-site" name="production-site" className="gwssc-input gwssc-input--radius-bottom" placeholder="https://path.to-dev-website.tld" value={productionSite} onChange={onFrameChangeHandler} />
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

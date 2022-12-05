import React, { useState } from "react";

export default function WebsiteSpecLoader(props) {
    let { currentQueryURL } = props,
        queryURL = new URL(currentQueryURL);
    const { value, onChange, specLoadedStatus } = props,
        [specLoaded, setSpecLoaded] = useState(Boolean(specLoadedStatus)),
        [specImg, setSpecImg] = useState(value);

    const onSpecChangeHandler = (e) => {
        setSpecImg(e.target.value);
    };

    const onLoadHandler = (e) => {
        e.preventDefault();
        queryURL.searchParams.set("spec-img", specImg);

        if (specImg !== "") {
            onChange({ specSrc: specImg }, queryURL, true);
            setSpecLoaded(true);
        }
    };

    const onUnloadHandler = (e) => {
        e.preventDefault();
        queryURL.searchParams.delete("spec-img");
        onChange({ specSrc: specImg }, queryURL, false);
        setSpecLoaded(false);
    };

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">
                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label htmlFor="spec-img">Spec Image URL</label>
                    </legend>
                </div>

                <div className={`gwssc-grid-${specLoaded ? "6" : "12"}`}>
                    <button className="gwssc-button gwssc-button--radius-top" onClick={onLoadHandler}>
                        Load
                    </button>
                </div>

                {specLoaded ? (
                    <div className="gwssc-grid-6">
                        <button className="gwssc-button gwssc-button__secondary--radius-top gwssc-button__secondary" onClick={onUnloadHandler}>
                            Unload
                        </button>
                    </div>
                ) : (
                    ""
                )}

                <div className="gwssc-grid-24">
                    <div className="gwssc-input-wrap gwssc-input-wrap--radius-bottom">
                        <input type="url" id="spec-img" name="spec-img" className="gwssc-input gwssc-input--radius-bottom" placeholder="https://path.to.spec/image.png" value={specImg} onChange={onSpecChangeHandler} />
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

WebsiteSpecLoader.defaultProps = {
    specLoaded: false
};

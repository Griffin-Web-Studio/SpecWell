import React, { useState } from "react";

export default function WebsiteSpecLoader(props) {
    const { specOptions, onChange } = props;
    const [specImg, setSpecImg] = useState(specOptions.specSrc);

    let queryURL = new URL(specOptions.currentUrl);

    const onSpecChangeHandler = (e) => {
        setSpecImg(e.target.value);
    };

    const onLoadHandler = (e) => {
        e.preventDefault();

        if (specImg !== "") {
            queryURL.searchParams.set("spec-img", specImg);
            onChange({ specSrc: specImg, specIsLoaded: true }, queryURL);
        }
    };

    const onUnloadHandler = (e) => {
        e.preventDefault();
        queryURL.searchParams.delete("spec-img");
        onChange({ specSrc: "", specIsLoaded: false }, queryURL);
    };

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">
                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label htmlFor="spec-img">Spec Image URL</label>
                    </legend>
                </div>

                <div className={`gwssc-grid-${specOptions.specIsLoaded ? "6" : "12"}`}>
                    <button className="gwssc-button gwssc-button--radius-top" onClick={onLoadHandler}>
                        Load
                    </button>
                </div>

                {specOptions.specIsLoaded ? (
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

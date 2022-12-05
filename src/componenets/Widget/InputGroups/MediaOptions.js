import NumberInputIncDec from "../../UI/InputGroups/NumberIncDec";

export default function MediaOptions(props) {
    const queryParameters = new URLSearchParams(window.location.search)
    const specMediaWidth = (queryParameters.get("spec-media-width") !== null) ? Number(queryParameters.get("spec-media-width")) : 0;
    const specMediaZoom = (queryParameters.get("spec-media-zoom") !== null) ? Number(queryParameters.get("spec-media-zoom")) : 0;
    const onSpecMediaWidthAdjust = (e) => {
        console.log(e);
    };

    const onSpecMediaZoomAdjust = (e) => {
        console.log(e);
    };

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">
                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label for="site-width-preset">Media Options</label>
                    </legend>
                </div>

                <div className="gwssc-grid-24 gwssc-input-wrap gwssc-input-wrap--radius-bottom gwssc-input-wrap--radius-top-right">
                    <div className="gwssc-grid col-2 gap-row-10">
                        <div className="gwssc-grid-2">
                            <div className="gwssc-grid col-1 gap-col-10 ">
                                <div className="gwssc-grid-1">
                                    <label for="site-width-preset" className="gwssc-label full">
                                        Media Presets
                                    </label>
                                </div>

                                <div className="gwssc-grid-1">
                                    <select name="site-width-preset" id="site-width-preset" className="gwssc-input gwssc-input--radius-top gwssc-input--radius-bottom">
                                        <option selected disabled>
                                            {" "}
                                            Select Media Preset{" "}
                                        </option>
                                        {/* Mobile */}
                                        <option value="320">s-mobile (320px)</option>
                                        <option value="375">m-mobile (375px)</option>
                                        <option value="425">l-mobile (425px)</option>
                                        {/* Tablet */}
                                        <option value="540">s-tablet (540px)</option>
                                        <option value="655">m-tablet (655px)</option>
                                        <option value="768">l-tablet (768px)</option>
                                        {/* Laptop */}
                                        <option value="854">s-laptop (854px)</option>
                                        <option value="940">m-laptop (940px)</option>
                                        <option value="1024">l-laptop (1024px)</option>
                                        {/* Desktop */}
                                        <option value="1440">s-desktop (1440px)</option>
                                        <option value="1920">m-desktop (1920px)</option>
                                        <option value="2560">l-desktop (2560px)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="gwssc-grid-2">
                            <div className="gwssc-grid col-2 gap-col-10">
                                <div className="gwssc-grid-1">
                                    <NumberInputIncDec value={specMediaWidth} label="Media Width" id="spec-media-width" onMouseDown={onSpecMediaWidthAdjust} onMouseUp={onSpecMediaWidthAdjust} />
                                </div>

                                <div className="gwssc-grid-1">
                                    <NumberInputIncDec value={specMediaZoom} label="Media Zoom" id="spec-media-zoom" onMouseDown={onSpecMediaZoomAdjust} onMouseUp={onSpecMediaZoomAdjust} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

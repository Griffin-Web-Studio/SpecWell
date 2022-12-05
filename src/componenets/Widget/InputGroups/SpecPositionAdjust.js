import NumberInputIncDec from "../../UI/InputGroups/NumberIncDec";

export default function SpecPositionAdjust(props) {
    const queryParameters = new URLSearchParams(window.location.search)
    const specXAdjust = (queryParameters.get("spec-x-adjust") !== null) ? Number(queryParameters.get("spec-x-adjust")) : 0;
    const specYAdjust = (queryParameters.get("spec-y-adjust") !== null) ? Number(queryParameters.get("spec-y-adjust")) : 0;

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">
                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label for="spec-opacity">Spec Axis Adjust</label>
                    </legend>
                </div>

                <div className="gwssc-grid-24">
                    <div className="gwssc-grid col-2 gap-col-10 gwssc-input-wrap gwssc-input-wrap--radius-bottom gwssc-input-wrap--radius-top-right">
                        <div className="gwssc-grid-1">
                            <NumberInputIncDec
                                label="X Axis Adjust"
                                id="spec-x-adjust"
                                value={specXAdjust}
                            />
                        </div>

                        <div className="gwssc-grid-1">
                            <NumberInputIncDec
                                label="Y Axis Adjust"
                                id="spec-y-adjust"
                                value={specYAdjust}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

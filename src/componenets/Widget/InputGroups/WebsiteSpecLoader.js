export default function WebsiteSpecLoader(props) {
    const queryParameters = new URLSearchParams(window.location.search)
    const specImg = (queryParameters.get("spec-img") !== null) ? queryParameters.get("spec-img") : "";

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">

                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label for="spec-img">
                            Spec Image URL
                        </label>
                    </legend>
                </div>

                <div className="gwssc-grid-6">
                    <button className="gwssc-button gwssc-button--radius-top">
                        Load
                    </button>
                </div>

                <div className="gwssc-grid-6">
                    <button className="gwssc-button gwssc-button__secondary--radius-top gwssc-button__secondary">
                        Unload
                    </button>
                </div>

                <div className="gwssc-grid-24">
                    <div className="gwssc-input-wrap gwssc-input-wrap--radius-bottom">
                        <input
                            type="url"
                            id="spec-img"
                            name="spec-img"
                            className="gwssc-input gwssc-input--radius-bottom"
                            placeholder="https://path.to.spec/image.png"
                            value={specImg}
                        />
                    </div>
                </div>

            </div>
        </fieldset>
    )
}
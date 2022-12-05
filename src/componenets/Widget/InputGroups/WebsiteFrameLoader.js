export default function WebsiteFrameLoader(props) {
    const queryParameters = new URLSearchParams(window.location.search)
    const productionSite = (queryParameters.get("production-site") !== null) ? queryParameters.get("production-site") : "";

    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">

                <div className="gwssc-grid-12">
                    <legend className="gwssc-legend">
                        <label for="production-site">
                            Website Frame
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
                            id="production-site"
                            name="production-site"
                            className="gwssc-input gwssc-input--radius-bottom"
                            placeholder="https://path.to-dev-website.tld"
                            value={productionSite}
                        />
                    </div>
                </div>

            </div>
        </fieldset>
    )
}
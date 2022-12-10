import CreditAuthor from "../../UI/CreditAuthor";

export default function SpecCheckerCredits(props) {
    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">
                <div className="gwssc-grid-24">
                    <legend className="gwssc-legend" style={{ textAlign: "center" }}>
                        <label>
                            <span>Credits</span>
                        </label>
                    </legend>
                </div>

                <div className="gwssc-grid-24">
                    <div className="gwssc-input-wrap gwssc-input-wrap--radius-bottom">
                        <p>This software uses the following open source projects:</p>

                        <div className="gwssc-input-wrap gwssc-input-wrap--radius-top gwssc-input-wrap--radius-bottom">
                            <ul>
                                <li>
                                    <CreditAuthor projectName="ReactJS" projectAuthor="Facebook, Inc. and its affiliates" projectLicense="MIT" projectUrl="https://reactjs.org/" />
                                </li>
                                <li>
                                    <CreditAuthor projectName="CodeMirror" projectAuthor="Marijn Haverbeke and others" projectLicense="MIT" projectUrl="https://codemirror.net/" />
                                </li>
                                <li>
                                    <CreditAuthor projectName="React-Codemirror" projectAuthor="[UIW]" projectLicense="MIT" projectUrl="https://uiwjs.github.io/react-codemirror/" />
                                </li>
                                <li>
                                    <CreditAuthor projectName="Fantasticon" projectAuthor="Tancredi Trugenberger" projectLicense="MIT" projectUrl="https://www.npmjs.com/package/fantasticon/" />
                                </li>
                                <li>
                                    <CreditAuthor projectName="Jest" projectAuthor="Facebook, Inc. and its affiliates" projectLicense="MIT" projectUrl="https://jestjs.io/" />
                                </li>
                                <li>
                                    <CreditAuthor projectName="Sass" projectAuthor="Sass Core Team" projectLicense="MIT" projectUrl="https://sass-lang.com/" />
                                </li>
                                <li>
                                    <CreditAuthor projectName="Web Vitals" projectAuthor="Google LLC" projectLicense="MIT" projectUrl="https://web.dev/vitals/" />
                                </li>
                            </ul>
                        </div>

                        <p>We would like to express our gratitude to the authors and contributors of these projects for their work.</p>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

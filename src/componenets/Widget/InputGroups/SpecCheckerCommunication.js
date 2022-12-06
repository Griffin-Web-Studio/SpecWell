import React from "react";
import CodemirrorInput from "../../UI/CodemirrorInput";

export default function SpecCheckerCommunication(props) {
    return (
        <fieldset className="gwssc-group">
            <div className="gwssc-grid gap-col-4">
                <div className="gwssc-grid-24">
                    <legend className="gwssc-legend">
                        <label style={{ textAlign: "center" }}>
                            <span>Client &lt; </span>
                            <span className="communication-line-1">=</span>
                            <span className="communication-line-2">=</span>
                            <span className="communication-line-3">=</span>
                            <span className="communication-line-4">=</span>
                            <span className="communication-line-5">=</span>
                            <span> &gt; Host (Communication)</span>
                        </label>
                    </legend>
                </div>

                <div className="gwssc-grid-24">
                    <div className="gwssc-input-wrap gwssc-input-wrap--radius-bottom">
                        <p className="gwssc-client-com-note">For this SpecChecker (host) to automatically correct frame (client) height, you need to add this script anywhere before the end of the body. Do it on each page you want to spec check.</p>

                        <div className="gwssc-input-wrap gwssc-input-wrap--radius-top gwssc-input-wrap--radius-bottom">
                            <CodemirrorInput
                                value={
                                    `<script>\n` +
                                    `window.addEventListener('message', event => {\n` +
                                    `    console.group("CLIENT");\n` +
                                    `    console.log('I received some message');\n` +
                                    `    console.log('It originated from here: ' + event.origin);\n\n` +
                                    `    if (event.origin.startsWith('http://192.168') || event.origin.startsWith('http://localhost') || event.origin.startsWith('https://gws-internal.griffin-studio.co.uk/')) {\n` +
                                    `        console.log('It came from good source');\n\n` +
                                    `        if (event.data === 'can I get your height?') {\n` +
                                    `            console.log('It contains hello message: ' + event.data);\n` +
                                    `            var i_height = height = Math.max(\n` +
                                    `                document.body.scrollHeight,\n` +
                                    `                document.body.offsetHeight,\n` +
                                    `                document.documentElement.clientHeight,\n` +
                                    `                document.documentElement.scrollHeight,\n` +
                                    `                document.documentElement.offsetHeight\n` +
                                    `            );\n\n` +
                                    `            const spec_response_data = JSON.stringify({\n` +
                                    `                my_height: i_height,\n` +
                                    `            });\n\n` +
                                    `            console.log('Sending my hight, which is: ' + i_height);\n` +
                                    `            console.log('Debug json: ');\n` +
                                    `            console.log(spec_response_data);\n\n` +
                                    `            window.parent.postMessage(spec_response_data, event.origin);\n` +
                                    `        } else {\n` +
                                    `            console.log('Oi, blimey that\\'s was SPAM!!!\\nhad to contain hello: "can I get your height?"/\\nInstead I got: ');\n` +
                                    `            console.log(event.data);\n` +
                                    `        }\n\n` +
                                    `    } else {\n` +
                                    `        console.log('Oi, blimey that\\'s was SPAM!!!\\nOrigin start must match: http://192.168, http://localhost, or https://gws-internal.griffin-studio.co.uk/\\nInstead I got: ');\n` +
                                    `        console.log(event);\n` +
                                    `    }\n\n` +
                                    `    console.groupEnd();\n` +
                                    `});\n` +
                                    `</script>`
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark } from "@uiw/codemirror-theme-github";

export default (props) => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log("value:", value);
    }, []);
    return (
        <div className="gwssc-container">

            <a href="#" className="gwssc-toggle">
                Spec-Check Options <span className="ico">⬆️</span>
            </a>

            <div className="gwssc-container-inner">
                
                <div className="gwssc-flex justify-center gwssc-flex-24">
                    <div className="gwssc-flex-8 gwssc-logo">
                        <a
                            href="https://griffin-web.studio"
                            className="gwssc-logo"
                            title="Griffin Web Studio Garage">
                            <img
                                src="https://files.gwssecureserver.co.uk/files/gws/logo.svg"
                                alt="GWS Logo"
                            />
                            | Garage |
                        </a>
                    </div>
                </div>

                <form method="get" className="gwssc-form">
                    <div className="gwssc-flex">
                        <div className="gwssc-flex-24 gwssc-flex">
                            <div className="gwssc-flex-24 gwssc-flex">
                                <div className="gwssc-flex-24">
                                    <div className="gwssc-input-group">
                                        <label
                                            for="production-site"
                                            className="gwssc-label"
                                        >
                                            Production Site URL
                                        </label>

                                        <div className="gwssc-flex">
                                            <input
                                                type="url"
                                                name="production-site"
                                                id="production-site"
                                                className="gwssc-input production-site-url"
                                                placeholder="https://path.to-dev-website.tld"
                                            />
                                            <a className="gws-button black-button gws-load-website">
                                                Load Website Frame
                                            </a>
                                            <a className="gws-button red-button gws-unload-website">
                                                Unload Website Frame
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="gwssc-flex-24">
                                    <div className="gwssc-input-group">
                                        <label
                                            for="spec-img"
                                            className="gwssc-label"
                                        >
                                            Spec Image URL
                                        </label>

                                        <div className="gwssc-flex">
                                            <input
                                                type="url"
                                                name="spec-img"
                                                id="spec-img"
                                                className="gwssc-input gwssc-img-url"
                                                placeholder="https://path.to.spec/image.png"
                                            />
                                            <a className="gws-button black-button load-spec-image">
                                                Load Spec Image
                                            </a>
                                            <a className="gws-button red-button unload-spec-image">
                                                Unload Spec Image
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="gwssc-flex-24">
                                    <div className="gwssc-input-group">
                                        <label
                                            for="spec-opacity"
                                            className="gwssc-label"
                                        >
                                            Spec Image Opacity
                                        </label>

                                        <div className="gwssc-flex">
                                            <div className="gwssc-input-like">
                                                <input
                                                    type="range"
                                                    id="spec_opacity"
                                                    className="spec-opacity"
                                                    name="spec-opacity"
                                                    value="0.3"
                                                    min="0"
                                                    max="1"
                                                    step="0.1"
                                                />
                                            </div>
                                            <a className="gws-button black-button spec-opacity-decrease">
                                                -
                                            </a>
                                            <a className="gws-button red-button spec-opacity-increase">
                                                +
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="gwssc-flex-24">
                                    <div className="gwssc-input-group">
                                        <label className="gwssc-label">
                                            Spec Axis Adjust
                                        </label>

                                        <div className="gwssc-input-like no-padding">
                                            <div className="gwssc-flex">
                                                <div className="gwssc-flex-12">
                                                    <label
                                                        for="spec-x-adjust"
                                                        className="gwssc-label full"
                                                    >
                                                        X Axis Adjust
                                                    </label>
                                                </div>

                                                <div className="gwssc-flex-12">
                                                    <label
                                                        for="spec-y-adjust"
                                                        className="gwssc-label full"
                                                    >
                                                        Y Axis Adjust
                                                    </label>
                                                </div>

                                                <div className="gwssc-flex-12">
                                                    <input
                                                        type="number"
                                                        id="spec-x-adjust"
                                                        className="gwssc-input spec-x-adjust"
                                                        name="spec-x-adjust"
                                                        value="0"
                                                    />
                                                </div>

                                                <div className="gwssc-flex-12">
                                                    <input
                                                        type="number"
                                                        id="spec-y-adjust"
                                                        className="gwssc-input spec-y-adjust"
                                                        name="spec-y-adjust"
                                                        value="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="gwssc-flex">
                                            <div className="gwssc-flex-12">
                                                <div className="gwssc-flex">
                                                    <a className="gws-button black-button spec-x-adjust-decrease">
                                                        -
                                                    </a>
                                                    <a className="gws-button red-button spec-x-adjust-increase">
                                                        +
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="gwssc-flex-12">
                                                <div className="gwssc-flex">
                                                    <a className="gws-button black-button spec-y-adjust-decrease">
                                                        -
                                                    </a>
                                                    <a className="gws-button red-button spec-y-adjust-increase">
                                                        +
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gwssc-flex-24">
                                <div className="gwssc-input-group">
                                    <label
                                        for="site-width-preset"
                                        className="gwssc-label"
                                    >
                                        Media Options
                                    </label>

                                    <div className="gwssc-flex">
                                        <div className="gwssc-input-like no-padding">
                                            <div className="gwssc-flex">
                                                <div className="gwssc-flex-24">
                                                    <label
                                                        for="site-width-preset"
                                                        className="gwssc-label full"
                                                    >
                                                        Media Presets
                                                    </label>
                                                </div>

                                                <div className="gwssc-flex-24">
                                                    <select
                                                        name="site-width-preset"
                                                        id="site-width-preset"
                                                        className="site-width-preset"
                                                    >
                                                        <option
                                                            selected
                                                            disabled
                                                        >
                                                            Select Media
                                                            Preset
                                                        </option>
                                                        // Mobile
                                                        <option value="320">
                                                            s-mobile 320)
                                                        </option>
                                                        <option value="375">
                                                            m-mobile 375)
                                                        </option>
                                                        <option value="425">
                                                            l-mobile 425)
                                                        </option>
                                                        // Tablet
                                                        <option value="540">
                                                            s-tablet 540)
                                                        </option>
                                                        <option value="655">
                                                            m-tablet 655)
                                                        </option>
                                                        <option value="768">
                                                            l-tablet 768)
                                                        </option>
                                                        // Laptop
                                                        <option value="854">
                                                            s-laptop 854)
                                                        </option>
                                                        <option value="940">
                                                            m-laptop 940)
                                                        </option>
                                                        <option value="1024">
                                                            l-laptop 1024)
                                                        </option>
                                                        // Desktop
                                                        <option value="1440">
                                                            s-desktop 1440)
                                                        </option>
                                                        <option value="1920">
                                                            m-desktop 1920)
                                                        </option>
                                                        <option value="2560">
                                                            l-desktop 2560)
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="gwssc-input-like no-padding no-border">
                                                <div className="gwssc-flex">
                                                    <div className="gwssc-flex-12">
                                                        <label
                                                            for="spec-media-width"
                                                            className="gwssc-label full"
                                                        >
                                                            Media Width
                                                        </label>
                                                    </div>

                                                    <div className="gwssc-flex-12">
                                                        <label
                                                            for="spec-media-zoom"
                                                            className="gwssc-label full"
                                                        >
                                                            Media Zoom
                                                        </label>
                                                    </div>

                                                    <div className="gwssc-flex-12">
                                                        <input
                                                            type="number"
                                                            id="spec-media-width"
                                                            className="gwssc-input spec-media-width"
                                                            name="spec-media-width"
                                                            value="800"
                                                        />
                                                    </div>

                                                    <div className="gwssc-flex-12">
                                                        <input
                                                            type="number"
                                                            id="spec-media-zoom"
                                                            className="gwssc-input spec-media-zoom"
                                                            name="spec-media-zoom"
                                                            value="100"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gwssc-flex">
                                        <div className="gwssc-flex-12">
                                            <div className="gwssc-flex">
                                                <a className="gws-button black-button spec-width-decrease">
                                                    -
                                                </a>
                                                <a className="gws-button red-button spec-width-increase">
                                                    +
                                                </a>
                                            </div>
                                        </div>

                                        <div className="gwssc-flex-12">
                                            <div className="gwssc-flex">
                                                <a className="gws-button black-button spec-zoom-decrease">
                                                    -
                                                </a>
                                                <a className="gws-button red-button spec-zoom-increase">
                                                    +
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gwssc-flex-24">
                                <div className="gwssc-input-group">
                                    <label
                                        for="gwssc-client-com"
                                        className="gwssc-label"
                                    >
                                        Client &lt;-&gt; Host Communication
                                    </label>

                                    <div className="gwssc-flex">
                                        <div className="gwssc-input-like">
                                            <p className="gwssc-client-com-note">
                                                For this spec checker to
                                                automatically correct frame
                                                height, you need to add this
                                                script anywhere before the
                                                end of the body. Do it on
                                                the page you about to spec
                                                check.
                                            </p>
                                            <CodeMirror
                                            value={
                                                `<script>\n` +
                                                `  window.addEventListener(\'message\', event => {\n` +
                                                `      console.log(\'CLIENT: I received some message\');\n` +
                                                `      console.log(\'CLIENT: It originated from here: \' + event.origin);\n\n` +
                                                `      if (event.origin.startsWith(\'http://192.168\') || event.origin.startsWith(\'http://localhost\') || event.origin.startsWith(\'https://gws-internal.griffin-studio.co.uk/\')) {\n` +
                                                `          console.log(\'CLIENT: It came from good source\');\n\n` +
                                                `          if (event.data === \'can I get your height?\') {\n` +
                                                `              console.log(\'CLIENT: It contains hello message: \' + event.data);\n` +
                                                `              var i_height = document.body.offsetHeight;\n\n` +
                                                `              const spec_response_data = JSON.stringify({\n` +
                                                `                  my_height: i_height,\n` +
                                                `              });\n\n` +
                                                `              console.log(\'CLIENT: Sending my hight, which is: \' + i_height);\n` +
                                                `              console.log(\'CLIENT: Debug json: \');\n` +
                                                `              console.log(spec_response_data);\n\n` +
                                                `              window.parent.postMessage(spec_response_data, event.origin);\n` +
                                                `          } else {\n` +
                                                `              console.log(\'CLIENT: Oi, blimey that\\\'s was SPAM!!!\\nhad to contain hello: "can I get your height?"/\\nInstead I got: \');\n` +
                                                `              console.log(event.data);\n` +
                                                `          }\n\n` +
                                                `      } else {\n` +
                                                `          console.log(\'CLIENT: Oi, blimey that\\\'s was SPAM!!!\\nOrigin start must match: http://192.168, http://localhost, or https://gws-internal.griffin-studio.co.uk/\\nInstead I got: \');\n` +
                                                `          console.log(event);\n` +
                                                `      }\n\n` +
                                                `  });\n` +
                                                `</script>`
                                            }
                                            height="100%"
                                            theme={githubDark}
                                            extensions={[javascript({ jsx: true })]}
                                            onChange={onChange}
                                            id="gwssc-client-com"
                                            className="gwssc-code-child"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
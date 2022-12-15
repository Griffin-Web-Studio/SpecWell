import React, { useState } from "react";
import "./sass/style.sass";
import WebsiteFrame from "./componenets/Widget/WebsiteFrame";
import WidgetContainer from "./componenets/Widget/WidgetContainer";
import SpecImage from "./componenets/Widget/SpecImage";
import { InstallPWAPrompt } from "./componenets/InstallPWAPropt";

function App() {
    const [options, stOptions] = useState({
        frameIsLoaded: false,
        specIsLoaded: false,
        frameSrc: "",
        specSrc: "",
        specOpacity: 0.5
    });

    const onOptionUpdateHandler = (newOption) => {
        stOptions((oldOption) => ({ ...oldOption, ...newOption }));
    };

    const updateIframeHeightHandler = (height) => {
        stOptions((oldOption) => ({ ...oldOption, iframeHeight: height }));
    };

    return (
        <div className="gwssc-app__outer">
            <div className="gwssc-app__inner">
                <div
                    className="gwssc__testing-container"
                    style={{
                        height: `${options.iframeHeight}`
                    }}>
                    <WebsiteFrame options={options} updateIframeHeight={updateIframeHeightHandler} />

                    <SpecImage options={options} />
                </div>

                <WidgetContainer onOptionUpdate={onOptionUpdateHandler} />

                <InstallPWAPrompt />
            </div>
        </div>
    );
}

export default App;

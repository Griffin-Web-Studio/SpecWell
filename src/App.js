import React, { useState } from "react";
import "./sass/style.sass";
import WebsiteFrame from "./componenets/Widget/WebsiteFrame";
import WidgetContainer from "./componenets/Widget/WidgetContainer";
import SpecImage from "./componenets/Widget/SpecImage";

function App() {
    const [options, stOptions] = useState({
        frameIsLoaded: false,
        specIsLoaded: false,
        frameSrc: "",
        specSrc: "",
        specOpacity: 0.5,
    });

    const onOptionUpdateHandler = (newOption) => {
        stOptions((oldOption) => ({...oldOption, ...newOption}));
    };

    return (
        <div className="gwssc-app__outer">
            <div className="gwssc-app__inner">
                <div className="gwssc-testing-container">
                    <WebsiteFrame options={options} />

                    <SpecImage options={options} />
                </div>

                <WidgetContainer onOptionUpdate={onOptionUpdateHandler} />
            </div>
        </div>
    );
}

export default App;

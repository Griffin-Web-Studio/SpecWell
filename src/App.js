import React, { useState } from "react";
import "./sass/style.sass";
import WebsiteFrame from "./componenets/Widget/WebsiteFrame";
import WidgetContainer from "./componenets/Widget/WidgetContainer";
import SpecImage from "./componenets/Widget/SpecImage";

function App() {
    const [websiteFrameSrc, setWebsiteFrameSrc] = useState("https://griffin-web.studio");
    const [specSrc, setSpecSrc] = useState("");

    const onFrameChangeHandler = (newFrameSrc) => {
        setWebsiteFrameSrc(newFrameSrc);
    }

    const onSpecChangeHandler = (newSpecSrc) => {
        setSpecSrc(newSpecSrc);
    }

    return (
        <div className="gcms-app__outer">
            <div className="gcms-app__inner">

                <WebsiteFrame websiteFrameSrc={websiteFrameSrc} />

                <SpecImage specSrc={specSrc} />

                <WidgetContainer onFrameChange={onFrameChangeHandler} onSpecChange={onSpecChangeHandler} />

            </div>
        </div>
    );
}

export default App;

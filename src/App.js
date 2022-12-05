import React from "react";
import "./sass/style.sass";
import WebsiteFrame from "./componenets/websiteFrame/WebsiteFrame";
import WidgetContainer from "./componenets/Widget/WidgetContainer";

function App() {
    return (
        <div className="gcms-app__outer">
            <div className="gcms-app__inner">

                <WebsiteFrame />

                <WidgetContainer />

            </div>
        </div>
    );
}

export default App;

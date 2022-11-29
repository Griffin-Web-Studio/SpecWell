import React from "react";
import "./sass/style.scss";
import WebsiteFrame from "./componenets/websiteFrame/WebsiteFrame";
import WidgetContainer from "./componenets/Widget/WidgetContainer";

function App() {
    return (
        <div className="gcms-app">

            <WebsiteFrame />

            <WidgetContainer />

        </div>
    );
}

export default App;

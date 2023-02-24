import React from "react";
import "./sass/style.sass";
import { SpecOptions } from "./app/context/SpecOptions";
import { WidgetInner } from "./componenets/Widget/WidgetInner";

function App() {

    return (
        <div className="gwssc-app__outer">
            <SpecOptions>
                <WidgetInner />
            </SpecOptions>
        </div>
    );
}

export default App;

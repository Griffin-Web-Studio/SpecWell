import React, { useContext } from "react";
import { SpecContext } from "../../app/context/SpecOptions";
import { InstallPWAPrompt } from "../InstallPWAPropt";
import SpecImage from "./SpecImage";
import WebsiteFrame from "./WebsiteFrame";
import WidgetContainer from "./WidgetContainer";

export const WidgetInner = props => {
    const { options, setOptions } = useContext(SpecContext);

    return (
        <div className="gwssc-app__inner">
            <div
                className="gwssc__testing-container"
                style={{
                    height: `${options.iframeHeight}`
                }}>
                <WebsiteFrame />

                <SpecImage />
            </div>

            <WidgetContainer />

            <InstallPWAPrompt />
        </div>
    );
}
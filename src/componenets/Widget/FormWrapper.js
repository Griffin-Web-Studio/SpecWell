import React from "react";
import MediaOptions from "./InputGroups/MediaOptions";
import SpecCheckerCommunication from "./InputGroups/SpecCheckerCommunication";
import SpecOpacityChanger from "./InputGroups/SpecOpacityChanger";
import SpecPositionAdjust from "./InputGroups/SpecPositionAdjust";
import WebsiteFrameLoader from "./InputGroups/WebsiteFrameLoader";
import WebsiteSpecLoader from "./InputGroups/WebsiteSpecLoader";

export default function FormWrapper(props) {
    return (
        <form method="get" className="gwssc-form">
            <div className="gwssc-grid col-1 gap-row-20">
                <div className="gwssc-grid-1">
                    <WebsiteFrameLoader />
                </div>

                <div className="gwssc-grid-1">
                    <WebsiteSpecLoader />
                </div>

                <div className="gwssc-grid-1">
                    <SpecOpacityChanger />
                </div>

                <div className="gwssc-grid-1">
                    <SpecPositionAdjust />
                </div>

                <div className="gwssc-grid-1">
                    <MediaOptions />
                </div>

                <div className="gwssc-grid-1">
                    <SpecCheckerCommunication />
                </div>
            </div>
        </form>
    );
}

import React from "react";
import { ReactComponent as Logo } from "../../../images/logo.svg";

export default function WidgetHeader(props) {
    return (
        <div className="gwssc-grid">
            <div className="gwssc__logo-container">
                <a href="https://griffin-web.studio" target="_blank" rel="noreferrer" title="Griffin Web Studio Garage">
                    <Logo />
                </a>
            </div>
        </div>
    );
}

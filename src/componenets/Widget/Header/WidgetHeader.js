import React from "react";
import logo from "../../../images/logo.svg";

export default function WidgetHeader(props) {
    return (
        <div className="gwssc-grid">
            <div className="gwssc__logo-container">
                <a href="https://griffin-web.studio" title="Griffin Web Studio Garage">
                    <img className="gwssc__logo" src={logo} alt="Griffin Web Studio, ahem Garage" />
                </a>
            </div>
        </div>
    );
}

import React from "react";

export default function WidgetHeader(props) {
    return(
        <div className="gwssc-grid">
            <div className="gwssc-logo">
                <a
                    href="https://griffin-web.studio"
                    className="gwssc-logo"
                    title="Griffin Web Studio Garage">
                    <img
                        src="https://files.gwssecureserver.co.uk/files/gws/logo.svg"
                        alt="GWS Logo"
                    />
                    | Garage |
                </a>
            </div>
        </div>
    )
}
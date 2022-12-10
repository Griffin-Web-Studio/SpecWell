import React from "react";
import { ReactComponent as Logo } from "../../../images/logo.svg";

export default function WidgetHeader(props) {
    return (
        <div>
            <div className="gwssc-grid">
                <div className="gwssc__logo-container">
                    <a href="https://griffin-web.studio" target="_blank" rel="noreferrer" title="Griffin Web Studio Garage">
                        <Logo />
                    </a>
                </div>
            </div>
            <span className="gwssc__copyright">
                &copy; 2021 - {new Date().getFullYear()} Griffin Web Studio Limited, All Rights Reserved, for commercial license please reach out to{" "}
                <a href="mailto:rihards.s@griffin-web.studio" target="_blank" rel="noreferrer" title="rihards.s@griffin-web.studio">
                    rihards.s@griffin-web.studio
                </a>
            </span>
        </div>
    );
}

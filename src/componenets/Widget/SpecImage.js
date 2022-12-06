import React from "react";

export default function SpecImage(props) {
    const { specSrc } = props;

    if (specSrc !== "") {
        return (
            <div className="gwssc-image invert">
                <img src={specSrc} alt="Spec Overlay" className="image" />
            </div>
        );
    } else {
        return null;
    }
}

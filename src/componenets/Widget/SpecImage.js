import React from "react";

export default function SpecImage(props) {
    const { options } = props;

    if (options.specSrc !== "" && options.specIsLoaded) {
        return (
            <div className="gwssc__image gwssc__image--invert" style={{
                    opacity: options.specOpacity,
                    transform: `translate(${options.specXAxis}px, ${options.specYAxis}px) scale(${options.mediaZoom / 100})`,
                    width: `${options.mediaWidth}px`
                }}>
                <img src={options.specSrc} alt="Spec Overlay" className="image" />
            </div>
        );
    } else {
        return null;
    }
}

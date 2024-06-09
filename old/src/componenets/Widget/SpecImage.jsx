import React, { useContext } from "react";
import { SpecContext } from "../../app/context/SpecOptions";

export default function SpecImage(props) {
    const { options } = useContext(SpecContext);

    if (options.specSrc !== "" && options.specIsLoaded) {
        if (options.specIsFigma) {
            return (
                <div
                    className={`gwssc__image-container ${options.invertSpec ? "gwssc__image-container--invert" : ""}`}
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        transform: `translate(calc(${options.specXAxis}px), ${options.specYAxis}px)`
                        // transform: `scale(${options.mediaZoom / 100})`
                    }}>
                    <iframe
                        title="figma Spec Overlay"
                        src={options.specSrc}
                        className="gwssc__image"
                        alt="Spec Overlay"
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: "177.78%",
                            height: "100%",
                            opacity: options.specOpacity,
                            pointerEvents: options.mouseEventsOn === "spec" ? "all" : "none"
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div
                    className={`gwssc__image-container ${options.invertSpec ? "gwssc__image-container--invert" : ""}`}
                    style={{
                        transform: `scale(${options.mediaZoom / 100})`
                    }}>
                    <img
                        src={options.specSrc}
                        className="gwssc__image"
                        alt="Spec Overlay"
                        style={{
                            opacity: options.specOpacity,
                            transform: `translate(calc(-50% + ${options.specXAxis}px), ${options.specYAxis}px)`,
                            width: `${options.mediaWidth}px`,
                            pointerEvents: options.mouseEventsOn === "spec" ? "all" : "none"
                        }}
                    />
                </div>
            );
        }
    } else {
        return null;
    }
}

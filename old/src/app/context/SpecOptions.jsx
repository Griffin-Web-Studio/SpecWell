import React, { createContext, useState } from "react";

export const SpecContext = createContext({});

export const SpecOptions = props => {
    const urlParams = new URLSearchParams(window.location.search)
    const [options, setOptions] = useState({
        currentUrl:    new URL(window.location.href),
        frameSrc:      urlParams.get("production-site")  !== null ? urlParams.get("production-site")          : "",
        specSrc:       urlParams.get("spec-img")         !== null ? urlParams.get("spec-img")                 : "",
        frameIsLoaded: false,
        specIsLoaded:  false,
        establishedCommunication: false,
        mouseEventsOn: urlParams.get("mouse-events-on")  !== null ? urlParams.get("mouse-events-on")          : 'frame',
        invertSpec:    urlParams.get("invert-spec")      !== null ? urlParams.get("invert-spec")              : true,
        specOpacity:   urlParams.get("spec-opacity")     !== null ? Number(urlParams.get("spec-opacity"))     : 0.3,
        specYAxis:     urlParams.get("spec-y-adjust")    !== null ? Number(urlParams.get("spec-y-adjust"))    : 0,
        specXAxis:     urlParams.get("spec-x-adjust")    !== null ? Number(urlParams.get("spec-x-adjust"))    : 0,
        mediaWidth:    urlParams.get("spec-media-width") !== null ? Number(urlParams.get("spec-media-width")) : 1920,
        mediaZoom:     urlParams.get("spec-media-zoom")  !== null ? Number(urlParams.get("spec-media-zoom"))  : 100,
    });

    const value = { options, setOptions };

    return (
        <SpecContext.Provider value={value}>
            {props.children}
        </SpecContext.Provider>
    );
};
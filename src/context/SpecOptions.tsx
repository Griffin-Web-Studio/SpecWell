import React, {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useMemo,
} from "react";

type Options = {
    currentUrl: URL;
    frameSrc: string;
    specSrc: string;
    frameIsLoaded: boolean;
    specIsLoaded: boolean;
    establishedCommunication: boolean;
    mouseEventsOn: string;
    invertSpec: boolean;
    specOpacity: number;
    specYAxis: number;
    specXAxis: number;
    mediaWidth: number;
    mediaZoom: number;
};

type SpecOptionsProps = {
    children: ReactNode;
};

interface ContextValue {
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
}

export const SpecContext = createContext<ContextValue | null>(null);

export const SpecOptions: React.FC<SpecOptionsProps> = ({ children }) => {
    const urlParams = new URLSearchParams(window.location.search);

    const [options, setOptions] = useState<Options>(() => ({
        currentUrl: new URL(window.location.href),
        frameSrc: urlParams.get("production-site") ?? "",
        specSrc: urlParams.get("spec-img") ?? "",
        frameIsLoaded: false,
        specIsLoaded: false,
        establishedCommunication: false,
        mouseEventsOn: urlParams.get("mouse-events-on") ?? "frame",
        invertSpec: urlParams.get("invert-spec")
            ? urlParams.get("invert-spec") === "true"
            : true,
        specOpacity: Number(urlParams.get("spec-opacity")) || 0.3,
        specYAxis: Number(urlParams.get("spec-y-adjust")) || 0,
        specXAxis: Number(urlParams.get("spec-x-adjust")) || 0,
        mediaWidth: Number(urlParams.get("spec-media-width")) || 1920,
        mediaZoom: Number(urlParams.get("spec-media-zoom")) || 100,
    }));

    useEffect(() => {
        const newUrlParams = new URLSearchParams();
        newUrlParams.set("production-site", options.frameSrc);
        newUrlParams.set("spec-img", options.specSrc);
        newUrlParams.set("mouse-events-on", options.mouseEventsOn);
        newUrlParams.set("invert-spec", options.invertSpec.toString());
        newUrlParams.set("spec-opacity", options.specOpacity.toString());
        newUrlParams.set("spec-y-adjust", options.specYAxis.toString());
        newUrlParams.set("spec-x-adjust", options.specXAxis.toString());
        newUrlParams.set("spec-media-width", options.mediaWidth.toString());
        newUrlParams.set("spec-media-zoom", options.mediaZoom.toString());

        const newUrl = `${window.location.origin}${
            window.location.pathname
        }?${newUrlParams.toString()}`;
        window.history.replaceState(null, "", newUrl);
    }, [options]);

    const value = useMemo(() => ({ options, setOptions }), [options]);

    return (
        <SpecContext.Provider value={value}>{children}</SpecContext.Provider>
    );
};

import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { SpecContext } from "../../../../src/context/SpecOptions";

export default function WebsiteFrame(props) {
    const { options, setOptions } = useContext(SpecContext);
    const websiteFrameSrc =
        options.frameSrc !== ""
            ? options.frameSrc
            : "https://griffin-web.studio";
    const [iframeHeight, setIframeHeight] = useState("50vh");
    const iframeRef = useRef(null);

    const updateIframeHeight = useCallback(
        (height) => {
            setOptions((oldOption) => ({ ...oldOption, iframeHeight: height }));
        },
        [setOptions]
    );

    const updateCommunicationStatus = useCallback(
        (status) => {
            setOptions((oldOption) => ({
                ...oldOption,
                establishedCommunication: status,
            }));
        },
        [setOptions]
    );

    const onIframeLoad = useCallback(() => {
        const iframe = iframeRef.current;

        if (iframe.src !== window.location.href) {
            setIframeHeight("50vh");
            updateIframeHeight("50vh");

            setTimeout(() => {
                iframe.contentWindow.postMessage(
                    JSON.stringify({
                        request: "get_height",
                    }),
                    websiteFrameSrc
                );

                window.addEventListener("message", function (e) {
                    if (websiteFrameSrc.startsWith(e.origin)) {
                        const data = e.data;

                        const clientResponse = JSON.parse(data);
                        const clientHeight = clientResponse.my_height;

                        setIframeHeight(clientHeight + clientHeight / 5 + "px");
                        updateIframeHeight(
                            clientHeight + clientHeight / 5 + "px"
                        );
                        updateCommunicationStatus(true);
                    }
                });
            }, 100);
        }
        updateCommunicationStatus(false);
    }, [websiteFrameSrc, updateIframeHeight, updateCommunicationStatus]);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.addEventListener("load", onIframeLoad);
        }

        return () => {
            if (iframe) {
                iframe.removeEventListener("load", onIframeLoad);
            }
        };
    }, [onIframeLoad]);

    return (
        <div
            className="gwssc__website-iframe-container"
            style={{
                transform: `scale(${options.mediaZoom / 100})`,
            }}
        >
            <iframe
                ref={iframeRef}
                src={
                    websiteFrameSrc !== ""
                        ? websiteFrameSrc
                        : "https://griffin-web.studio"
                }
                className="gwssc__website-iframe"
                title="Website Frame"
                onLoad={onIframeLoad}
                style={{
                    transform: `translateX(-50%)`,
                    height: `${iframeHeight}`,
                    width: `${options.mediaWidth}px`,
                    pointerEvents:
                        options.mouseEventsOn === "frame" ? "all" : "none",
                }}
            />
        </div>
    );
}

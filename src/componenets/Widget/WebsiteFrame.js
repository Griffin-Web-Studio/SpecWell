import React, { useState } from "react";

export default function WebsiteFrame(props) {
    const {options} = props;
    const websiteFrameSrc = options.frameSrc !== "" ? options.frameSrc : "https://griffin-web.studio";
    const [iframeHeight, setIframeHeight] = useState("50vh");

    const onIframeLoad = (e) => {
        const iframe = e.target;

        console.group("HOST REQUEST");
        console.log("Iframe Loaded");

        if (iframe.src !== window.location.href) {
            setIframeHeight("50vh");

            console.log("Sending request to iframe with Hello\nSending to: " + websiteFrameSrc);
            iframe.contentWindow.postMessage("can I get your height?", websiteFrameSrc);

            console.groupEnd();

            window.addEventListener("message", function (e) {
                console.group("CLIENT RESPONSE");
                console.log("I received some message");
                console.log("It originated from here: " + e.origin);
                console.log(e);

                if (websiteFrameSrc.startsWith(e.origin)) {
                    console.log("Origin of the message matches client");
                    console.log("received this data: ");
                    var data = e.data;
                    console.log(data);

                    console.log("Unpacking JSON data");
                    var child_frame_response = JSON.parse(data),
                        client_height = child_frame_response.my_height;

                    console.log("Client claims their height is: " + client_height);
                    setIframeHeight(client_height + client_height / 5 + "px");
                } else {
                    console.log("Oi, blimey that's was SPAM!!!\nExpected: " + websiteFrameSrc + "\ngot: " + e.origin);
                }
                console.groupEnd();
            });
        }
    };

    return (
        <div className="gwssc-website-frame-container" style={{
            transform: `scale(${options.mediaZoom / 100})`,
            width: `${options.mediaWidth}px`
        }}>
            <iframe src={websiteFrameSrc !== "" ? websiteFrameSrc : "https://griffin-web.studio"} className="website-frame" title="Website Frame" id="iframe" onLoad={onIframeLoad} style={{ height: iframeHeight, width: `${options.mediaWidth}px` }} />
        </div>
    );
}

WebsiteFrame.defaultProps = {
    websiteFrameSrc: "https://griffin-web.studio"
};

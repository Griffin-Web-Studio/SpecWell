import React from "react";

export default function WebsiteFrame(props) {
    // console.log(props.websiteFrameSrc);
    
    return (
        <div className="gwssc-website-frame-container">
            <iframe src={props.websiteFrameSrc} className="website-frame" title="Website Frame"></iframe>
        </div>
    )
}

WebsiteFrame.defaultProps = {
    websiteFrameSrc: "https://griffin-web.studio"
}
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark } from "@uiw/codemirror-theme-github";

export default function CodemirrorInput(props) {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log("value:", value);
    }, []);
    
    return(
        <CodeMirror
        value={props.value}
        height="100%"
        theme={githubDark}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        id="gwssc-client-com"
        className="gwssc-code-child"
        />
    )
}
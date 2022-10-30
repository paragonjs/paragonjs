import * as React from "react";
import "./index.scss";
import Highlight from "react-highlight";

interface Props {
    children: React.ReactNode;
}
const CodeBlock: React.FC<any> = (props: Props) => {
    return (
        <>
            <link rel="stylesheet" href="/node_modules/highlight.js/styles/vs.css" />
            <Highlight {...props}></Highlight>
        </>
    );
};

export default CodeBlock;

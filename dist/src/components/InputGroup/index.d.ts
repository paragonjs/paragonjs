import * as React from "react";
import "./index.scss";
interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    sublabel?: string;
    direction?: "horizontal" | "vertical";
}
declare const InputGroup: React.FC<InputGroupProps>;
export default InputGroup;

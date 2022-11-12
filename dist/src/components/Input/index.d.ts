import * as React from "react";
import "./index.scss";
interface InputProps extends React.ComponentPropsWithRef<"input"> {
    containerProps?: InputContainerProps;
    leftElement?: React.ReactNode | React.ReactFragment;
    rightElement?: React.ReactNode | React.ReactFragment;
    autocomplete?: "on" | "off";
    type?: string;
    round?: boolean;
    small?: boolean;
    large?: boolean;
}
interface InputContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    fluid: boolean;
}
declare const Input: React.FC<InputProps>;
export default Input;

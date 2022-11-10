import * as React from "react";
import "./index.scss";
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    containerProps?: InputContainerProps;
    leftElement?: HTMLElement | Element | React.ReactNode | React.ReactFragment;
    rightElement?: HTMLElement | Element | React.ReactNode | React.ReactFragment;
    type?: React.HTMLInputTypeAttribute;
    round?: boolean;
    small?: boolean;
    large?: boolean;
}
interface InputContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    fluid: boolean;
}
declare const Input: React.FC<InputProps>;
export default Input;

import * as React from "react";
import "./index.scss";
interface SwitchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    variant?: "a" | "b" | "c";
    disabled?: boolean;
    onClick?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
    state?: boolean;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;

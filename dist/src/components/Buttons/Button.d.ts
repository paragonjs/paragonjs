import * as React from "react";
import "./index.scss";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick?: (...args: any) => void;
    color?: "blue" | "red" | "green" | "yellow" | "pink" | "purple" | "lavander" | "berry";
    fill?: boolean;
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;

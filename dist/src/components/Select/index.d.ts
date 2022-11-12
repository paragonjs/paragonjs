import * as React from "react";
import "./index.scss";
interface SelectProps extends React.ButtonHTMLAttributes<HTMLSelectElement> {
    options: Array<string | number>;
    optionRenderer: React.ReactNode;
}
export default function Select(props: SelectProps): JSX.Element;
export {};

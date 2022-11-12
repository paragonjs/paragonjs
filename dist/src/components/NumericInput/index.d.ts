import * as React from "react";
import "./index.scss";
interface NumericInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
    decimals?: number;
    value?: string | number;
    incrementers?: boolean;
    large?: boolean;
    small?: boolean;
    rounded?: boolean;
    fill?: boolean;
    handleDecimalCallback?: (decimalValue: string) => void;
    handleIncrement?: () => void;
    handleDecrement?: () => void;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
}
declare const NumericInput: React.FC<NumericInputProps>;
export default NumericInput;

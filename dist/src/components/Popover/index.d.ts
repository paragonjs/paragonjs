import * as React from "react";
import "./index.scss";
declare type Placement = "auto" | "auto-start" | "auto-end" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end";
declare type Strategy = "absolute" | "fixed";
interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
    element: Element | HTMLElement;
    placement?: Placement;
    arrow?: boolean;
    strategy?: Strategy;
}
declare const Popover: React.FC<PopperProps>;
export default Popover;

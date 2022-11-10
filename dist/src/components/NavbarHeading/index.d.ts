import * as React from "react";
import "./index.scss";
export interface NavbarHeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fontSize: "small" | "medium" | "large";
}
declare const NavbarHeading: React.FC<NavbarHeadingProps>;
export default NavbarHeading;

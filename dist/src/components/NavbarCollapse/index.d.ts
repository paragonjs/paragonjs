import * as React from "react";
import "./index.scss";
export interface NavbarCollapseProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    position?: "right" | "left";
}
declare const NavbarCollapse: React.FC<NavbarCollapseProps>;
export default NavbarCollapse;

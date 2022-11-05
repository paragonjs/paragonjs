import "./index.scss";
import * as React from "react";
export interface NavbarCollapseProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    position?: "right" | "left";
}
declare const NavbarCollapse: React.FC<NavbarCollapseProps>;
export default NavbarCollapse;

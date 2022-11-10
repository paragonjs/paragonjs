import * as React from "react";
import "./index.scss";
export interface NavbarLinkProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: string;
}
declare const NavLink: React.FC<NavbarLinkProps>;
export default NavLink;

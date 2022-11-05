import * as React from "react";
import "./index.scss";
export interface NavbarTogglerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: string;
}
declare const NavbarToggler: React.FC<NavbarTogglerProps>;
export default NavbarToggler;

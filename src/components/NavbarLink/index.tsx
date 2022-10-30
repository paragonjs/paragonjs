import * as React from "react";
import "./index.scss";

export interface NavbarLinkProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: string;
}
const NavLink: React.FC<NavbarLinkProps> = (props: NavbarLinkProps) => {
    return (
        <div
            {...props}
            className={`p1-navbar-link${props.className ? ` ${props.className}` : ""}`}
        ></div>
    );
};

export default NavLink;

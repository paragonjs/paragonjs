import * as React from "react";
import "./index.scss";

export interface NavbarTogglerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLDivElement> {
    color?: string;
}

const NavbarToggler: React.FC<NavbarTogglerProps> = (props: NavbarTogglerProps) => {
    const [show, setShow] = React.useState<boolean>(false);

    const handleClick = () => {
        setShow(!show);

        const navs = document.querySelectorAll(".p1-navbar-collapse");
        navs.forEach((nav) => nav.classList.toggle("navbar-collapse-show"));
    };

    return (
        <button
            className={`p1-navbar-toggler ${props.className ? ` ${props.className}` : ""}`}
            type="button"
            data-toggle="collapse"
            data-target="p1-navbar-collapse"
            onClick={handleClick}
        >
            &#9776;
        </button>
    );
};

export default NavbarToggler;

import "./index.scss";
import * as React from "react";
import NavHeading from "../NavbarHeading";
import NavLink from "../NavbarLink";
import NavCollapse from "../NavbarCollapse";
import NavToggler from "../NavbarToggler";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import NavbarProvider from "../../context/NavbarContext";

/**
 *
 *  Navbar
 *
 *  Navigation bar component - Bundled with NavbarCollapse, NavbarHeading, NavbarLink, and NavbarToggler -
 *  these components can be accessed by using <Navbar.Collapse/>, <Navbar.Toggler/>, etc.
 *
 *  cenetered - Margin centered if true.
 *
 *  default: false
 *
 *  variant - This changes the overal theme of the navbar.
 *
 *  Options: "dark" | "light"
 *
 *  Default: "light"
 *
 *  direction - The direction of the navigation bar.
 *
 *  Options: "horizontal" | "vertical"
 *
 *  Default: "horizontal"
 *
 */
const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const { centered, direction, variant, className, ...rest } = props;

    const classNames = useDynamicClassname({
        initialClassname: "p1-navbar",
        props: {
            variant,
            className,
            centered,
            direction,
        },
        dynamicProps: {
            /**
             *
             * Variant can be light or dark.
             *
             */
            variant: ["light", "dark"],
            /**
             *
             * Direction of horizontal bar - vertical meant to be used as a sidebar.
             *
             */
            direction: ["horizontal", "vertical"],
            centered: [true, false],
        },
    });

    return (
        <NavbarProvider>
            <div
                {...rest}
                className={classNames}
            />
        </NavbarProvider>
    );
};

export default Object.assign(Navbar, {
    Heading: NavHeading,
    Collapse: NavCollapse,
    Link: NavLink,
    Toggler: NavToggler,
});

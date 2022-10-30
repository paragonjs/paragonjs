import "./index.scss";
import * as React from "react";
import NavHeading from "../NavbarHeading";
import { NavbarLinkProps } from "../NavbarLink";
import { NavbarCollapseProps } from "../NavbarCollapse";
import { NavbarTogglerProps } from "../NavbarToggler";
interface NavbarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: string;
    Heading?: typeof NavHeading;
    Collapse?: React.FC<NavbarCollapseProps>;
    Link?: React.FC<NavbarLinkProps>;
    Toggler?: React.FC<NavbarTogglerProps>;
    direction?: "vertical" | "horizontal";
    centered?: boolean;
}
declare const _default: React.FC<NavbarProps> & {
    Heading: React.FC<import("../NavbarHeading").NavbarHeadingProps>;
    Collapse: React.FC<NavbarCollapseProps>;
    Link: React.FC<NavbarLinkProps>;
    Toggler: React.FC<NavbarTogglerProps>;
};
export default _default;

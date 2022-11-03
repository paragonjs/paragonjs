import * as React from "react";
import "./index.scss";
import useDynamicClassname from "../../hooks/useDynamicClassname";

export interface NavbarCollapseProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    position?: "right" | "left";
}

const NavbarCollapse: React.FC<NavbarCollapseProps> = (props: NavbarCollapseProps) => {
    const { position, className, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-navbar-collapse",
        props: {
            position,
            className,
        },
        dynamicProps: {
            position: ["left", "right"],
        },
    });

    return <div {...rest} id="p1-navbar-collapse" className={classNames}></div>;
};

export default NavbarCollapse;

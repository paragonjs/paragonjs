import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

export interface NavbarHeadingProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fontSize?: "small" | "medium" | "large";
}

const NavbarHeading: React.FC<NavbarHeadingProps> = (props: NavbarHeadingProps) => {
    const { fontSize, className, ...rest } = props;

    const classNames = useDynamicClassname({
        initialClassname: "p1-navbar-heading",
        props: {
            className,
            fontSize,
        },
        dynamicProps: {
            fontSize: ["small", "medium", "large"],
        },
    });

    return (
        <div
            {...rest}
            className={classNames}
        >
            {props.children}
        </div>
    );
};

export default NavbarHeading;

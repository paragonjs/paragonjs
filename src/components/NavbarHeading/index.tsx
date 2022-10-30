import * as React from "react";
import "./index.scss";

export interface NavbarHeadingProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fontSize: "small" | "medium" | "large";
}

const NavbarHeading: React.FC<NavbarHeadingProps> = (props: NavbarHeadingProps) => {
    const classNames = React.useMemo(() => {
        const _classNames = ["p1-navbar-heading"];

        if (props.fontSize) {
            _classNames.push(props.fontSize);
        }

        if (props.className) {
            _classNames.push(props.className);
        }

        return _classNames.join(" ");
    }, [props.fontSize, props.className]);

    return (
        <div {...props} className={classNames}>
            {props.children}
        </div>
    );
};

export default NavbarHeading;

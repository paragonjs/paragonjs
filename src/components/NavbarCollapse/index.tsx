import * as React from "react";
import "./index.scss";
import invariant from "tiny-invariant";

export interface NavbarCollapseProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    position?: "right" | "left";
}

const NavbarCollapse: React.FC<NavbarCollapseProps> = (props: NavbarCollapseProps) => {
    const classNames = React.useMemo(() => {
        const _classNames = ["p1-navbar-collapse"];

        //// Check POSITION
        if (props.position) {
            if (props.position !== "left" && props.position !== "right") {
                throw invariant("Position must be either 'right' or 'left'");
            }

            _classNames.push(props.position);
        }

        /// Check CLASSNAME
        if (props.className) {
            _classNames.push(props.className);
        }

        return _classNames.join(" ");
    }, [props.position, props.className]);

    return <div {...props} id="p1-navbar-collapse" className={classNames}></div>;
};

export default NavbarCollapse;

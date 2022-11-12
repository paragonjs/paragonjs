import "./index.scss";
import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import useNavbarContext from "../../hooks/useNavbarContext";

export interface NavbarCollapseProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    position?: "right" | "left";
}

const NavbarCollapse: React.FC<NavbarCollapseProps> = (props: NavbarCollapseProps) => {
    const { position, className, ...rest } = props;
    const { setCollapser } = useNavbarContext();
    const ref = React.useRef<HTMLDivElement>(null);

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

    React.useEffect(() => {
        if (ref && ref.current) {
            setCollapser(ref.current);
        }
    }, [ref, setCollapser]);

    return <div {...rest} ref={ref} id="p1-navbar-collapse" className={classNames}></div>;
};

NavbarCollapse.displayName = "NavbarCollapse";

export default NavbarCollapse;

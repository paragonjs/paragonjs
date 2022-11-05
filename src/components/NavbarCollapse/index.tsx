import "./index.scss";
import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import useNavbarContext from "../../hooks/useNavbarContext";
import css from "dom-helpers/css";

export interface NavbarCollapseProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    position?: "right" | "left";
}

type Dimension = "width" | "height";

const MARGINS: { [d in Dimension]: string[] } = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
};

function getDefaultDimensionValue(dimension: Dimension, elem: HTMLElement): number {
    const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
    const value = elem[offset];
    const margins = MARGINS[dimension];

    // @ts-ignore
    return value + parseInt(css(elem, margins[0]), 10) + parseInt(css(elem, margins[1]), 10);
}

const NavbarCollapse: React.FC<NavbarCollapseProps> = (props: NavbarCollapseProps) => {
    const { position, className, ...rest } = props;
    const { setCollapserHeight, setCollapser } = useNavbarContext();
    const ref = React.useRef<HTMLDivElement>();

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

    React.useEffect(() => {
        if (ref && ref.current) {
            setCollapserHeight(Math.ceil(getDefaultDimensionValue("height", ref.current)));
        }
    }, [ref, setCollapserHeight]);

    return <div {...rest} ref={ref} id="p1-navbar-collapse" className={classNames}></div>;
};

NavbarCollapse.displayName = "NavbarCollapse";

export default NavbarCollapse;

import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
    const { className, gap, fluid, variant, padding, justify, align, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-col",
        props: {
            className,
            gap,
            variant,
            padding,
            fluid,
            justify,
            align,
        },
        dynamicProps: {
            justify: [
                "flex-start",
                "flex-end",
                "space-around",
                "space-between",
                "auto",
                "center",
                "space-evenly",
                "stretch",
                "unset",
                "revert",
            ],
            align: ["flex-start", "flex-end", "center", "baseline", "stretch", "revert", "unset"],
            fluid: [false, true],
            variant: ["light", "dark"],
            padding: [0, 1, 2, 3, 4],
            gap: [0, 1, 2, 3, 4],
        },
    });

    return <div {...rest} className={classNames} />;
};

export default Column;

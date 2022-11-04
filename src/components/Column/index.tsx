import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
    const { className, radius, gap, variant, padding, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-col",
        props: {
            className,
            radius,
            gap,
            variant,
            padding,
        },
        dynamicProps: {
            radius: [0, 1, 2, 3, 4],
            variant: ["light", "dark"],
            padding: [0, 1, 2, 3, 4],
            gap: [0, 1, 2, 3, 4],
        },
    });

    return <div {...rest} className={classNames} />;
};

export default Column;

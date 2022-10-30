import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

const Card: React.FC<CardProps> = (props: CardProps) => {
    const { radius, className, elevation, variant, padding, color, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-card",
        props: {
            className,
            radius,
            elevation,
            variant,
            color,
            padding,
        },
        dynamicProps: {
            radius: [0, 1, 2, 3, 4],
            variant: ["light", "dark"],
            elevation: [0, 1, 2, 3, 4],
            padding: [0, 1, 2, 3, 4],
        },
    });

    return <div {...rest} className={classNames}></div>;
};

export default Card;

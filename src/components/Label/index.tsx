import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

const Label: React.FC<LabelProps> = (props: LabelProps): JSX.Element => {
    const { className, label, sublabel, children, ...rest } = props;

    const classNames = useDynamicClassname({
        initialClassname: "p1-label",
        props: {
            className,
            label,
            sublabel,
        },
        dynamicProps: {},
    });

    return (
        <label className={classNames} {...rest}>
            {label}
            {sublabel ? <span className="p1-sublabel">{sublabel}</span> : null}
            {children}
        </label>
    );
};

export default Label;

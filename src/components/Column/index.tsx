import * as React from "react";
import "./index.scss";

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
    const classNames = React.useMemo(() => {
        if (props.fluid) {
            return `p1-col fluid${props.className ? ` ${props.className} ` : ""} `;
        }

        return `p1-col${props.className ? ` ${props.className}` : ""}`;
    }, [props.className, props.fluid]);

    return <div {...props} className={classNames} />;
};

export default Column;

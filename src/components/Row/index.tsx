import * as React from "react";
import "./index.scss";

const Row: React.FC<RowProps> = (props: RowProps) => {
    const classNames = React.useMemo(() => {
        if (props.fluid) {
            return `p1-row fluid${props.className ? ` ${props.className} ` : ""} `;
        }

        return `p1-row${props.className ? ` ${props.className}` : ""}`;
    }, [props.className, props.fluid]);

    return <div {...props} className={classNames} />;
};

export default Row;

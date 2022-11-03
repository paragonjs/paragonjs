import * as React from "react";
import "./index.scss";
import Spinner from "../Spinner";
import useDynamicClassname from "../../hooks/useDynamicClassname";

const AsyncButton: React.FC<AsyncButtonProps> = (props: AsyncButtonProps): JSX.Element => {
    const [_loading, _setLoading] = React.useState<boolean>(props.loading);
    const { color, className, fill, loading, ...rest } = props;

    const classNames = useDynamicClassname({
        initialClassname: "p1-button",
        props: {
            loading,
            color,
            className,
            fill,
        },
        dynamicProps: {
            color: ["blue", "red", "green", "yellow", "pink", "purple", "lavander", "berry"],
            fill: [true, false],
        },
    });

    async function handleClick(): Promise<void> {
        try {
            _setLoading(true);
            await props.onClick();
            _setLoading(false);
        } catch (error) {
            _setLoading(false);
        }
    }

    return (
        <button
            {...rest}
            id={`p1-button${props.id ? ` ${props.id}` : ""}`}
            className={classNames}
            onClick={handleClick}
        >
            {_loading || loading ? <Spinner /> : props.children}
        </button>
    );
};

export default AsyncButton;

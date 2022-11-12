import * as React from "react";
import BN from "bn.js";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

interface NumericInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
    decimals?: number;
    value?: string | number;
    incrementers?: boolean;
    large?: boolean;
    small?: boolean;
    rounded?: boolean;
    fill?: boolean;
    handleDecimalCallback?: (decimalValue: string) => void;
    handleIncrement?: () => void;
    handleDecrement?: () => void;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

function bn(x: string | number | BN) {
    return new BN(x);
}

const NumericInput: React.FC<NumericInputProps> = (props: NumericInputProps) => {
    const [decimalValue, setDecimalValue] = React.useState<string>("0");
    const {
        decimals,
        handleDecimalCallback,
        value,
        incrementers,
        className,
        containerProps,
        large = false,
        small = false,
        fill = false,
        ...rest
    } = props;

    const classNames = useDynamicClassname({
        initialClassname: "p1-numeric-input",
        props: {
            className,
            large,
            small,
        },
        dynamicProps: {
            large: [true, false],
            small: [true, false],
        },
    });

    const containerClassNames = useDynamicClassname({
        initialClassname: "p1-numeric-input-container",
        props: {
            className: containerProps ? containerProps.className : "",
            fill,
        },
        dynamicProps: {
            fill: [true, false],
        },
    });

    const maybeHandleDecimals = React.useCallback(() => {
        if (decimals && value) {
            setDecimalValue(
                bn(value as any)
                    .mul(bn(decimals))
                    .toString()
            );
        }
    }, [value, decimals]);

    React.useEffect(() => {
        if (handleDecimalCallback) handleDecimalCallback(decimalValue);
    }, [handleDecimalCallback, decimalValue]);

    React.useEffect(() => {
        maybeHandleDecimals();
    }, [maybeHandleDecimals]);

    return (
        <div className={containerClassNames}>
            <input value={value} className={classNames} {...rest} />

            {incrementers ? (
                <>
                    <button className="p1-numeric-input-icon">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224H272v74.5c0 8.8-7.2 16-16 16-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3V272h-74.5c-4.4 0-8.4-1.8-11.3-4.7-2.9-2.9-4.7-6.9-4.7-11.3 0-8.8 7.2-16 16-16H240v-74.5c0-8.8 7.2-16 16-16s16 7.2 16 16V240h74.5c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
                        </svg>
                    </button>
                    <button className="p1-numeric-input-icon">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229H149v-42h214v42z"></path>
                        </svg>
                    </button>
                </>
            ) : null}
        </div>
    );
};

export default NumericInput;

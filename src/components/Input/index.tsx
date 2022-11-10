import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    containerProps?: InputContainerProps;
    leftElement?: HTMLElement | Element | React.ReactNode | React.ReactFragment;
    rightElement?: HTMLElement | Element | React.ReactNode | React.ReactFragment;
    type?: React.HTMLInputTypeAttribute;
    round?: boolean;
    small?: boolean;
    large?: boolean;
}

interface InputContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    fluid: boolean;
}

const Input: React.FC<InputProps> = React.forwardRef(function Input(props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) {
    const {
        className,
        containerProps = { className: "p1-input-container", fluid: false },
        placeholder,
        rightElement,
        leftElement,
        type = "text",
        ...rest
    } = props;
    const { className: containerClassname, fluid, ...containerRest } = containerProps;
    const classNames = useDynamicClassname({
        initialClassname: "p1-input",
        props: {
            rightElement,
            leftElement,
            className,
        },
        dynamicProps: {},
    });

    const containerClassnames = useDynamicClassname({
        initialClassname: "p1-input-container",
        props: {
            fluid,
            className: containerClassname,
        },
        dynamicProps: {},
    });

    return (
        <div className={containerClassnames} {...containerRest}>
            <input
                ref={ref}
                type={type}
                className={classNames}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    );
});

Input.displayName = "Input";

export default Input;

import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
    containerProps?: InputContainerProps;
    leftElement?: React.ReactNode | React.ReactFragment;
    rightElement?: React.ReactNode | React.ReactFragment;
    autocomplete?: "on" | "off";
    type?: string;
    round?: boolean;
    small?: boolean;
    fill?: boolean;
    large?: boolean;
    elevation?: 1 | 2;
    status?: Status;
}

interface InputContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    fill?: boolean;
    className?: string;
}

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(function Input(
    props: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
) {
    const {
        className,
        containerProps = { className: "p1-input-container" },
        placeholder,
        rightElement,
        leftElement,
        autocomplete = "off",
        type = "text",
        round = false,
        large = false,
        small = false,
        elevation = 2,
        fill: fill = false,
        status,
        ...rest
    } = props;

    const { className: containerClassname, ...containerRest } = containerProps;

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
            round,
            large,
            small,
            fill,
            className: containerClassname,
            elevation,
            status,
        },
        dynamicProps: {
            large: [true, false],
            small: [true, false],
            round: [true, false],
            fill: [true, false],
            elevation: [1, 2],
            status: ["success", "danger", "warning"],
        },
    });

    return (
        <div
            className={containerClassnames}
            {...containerRest}
        >
            {leftElement ? <span className="p1-input-element">{leftElement}</span> : null}
            <input
                ref={ref}
                type={type}
                className={classNames}
                placeholder={placeholder}
                autoComplete={autocomplete}
                {...rest}
            />
            {rightElement ? <span className="p1-input-element">{rightElement}</span> : null}
        </div>
    );
});

Input.displayName = "Input";

export default Input;

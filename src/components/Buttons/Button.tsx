import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick?: (...args: any) => void;
    color?: "blue" | "red" | "green" | "yellow" | "pink" | "purple" | "lavander" | "berry";
    fill?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
    const { color, className, fill, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-button",
        props: {
            color,
            className,
            fill,
        },
        dynamicProps: {
            color: ["blue", "red", "green", "yellow", "pink", "purple", "lavander", "berry"],
            fill: [true, false],
        },
    });
    return <button {...rest} className={classNames} />;
};

export default Button;

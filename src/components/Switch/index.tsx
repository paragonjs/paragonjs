import * as React from "react";
import "./index.scss";

interface SwitchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    variant?: "a" | "b" | "c";
    disabled?: boolean;
    onClick?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
    state?: boolean;
}

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
    const { variant = "a", ...rest } = props;

    if (variant === "c") {
        return <SwitchC {...rest} />;
    }
    if (variant === "b") {
        return <SwitchB {...rest} />;
    }

    return <SwitchA {...rest} />;
};

const SwitchA = (
    props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => (
    <>
        <input id="chck" className="p1-switch-a" type="checkbox" {...props} />
        <label htmlFor="chck" className="p1-check-trail">
            <span className="p1-check-handler"></span>
        </label>
    </>
);

const SwitchB = (
    props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => (
    <label className="p1-switch-b">
        <input type="checkbox" {...props} />
        <div>
            <span></span>
        </div>
    </label>
);

const SwitchC = (
    props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => (
    <div className="p1-switch-c-container">
        <label className="p1-switch-c">
            <input className="p1-switch-c-input" type="checkbox" {...props} />
            <div className="p1-switch-c-slider" />
        </label>
    </div>
);

export default Switch;

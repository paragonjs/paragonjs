import * as React from "react";
import "./index.scss";

interface Props
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    variant: "a" | "b" | "c";
}

const Switch: React.FC<any> = (props: Props) => {
    const { variant, ...rest } = props;

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
        <input id="chck" className="switch-a" type="checkbox" {...props} />
        <label htmlFor="chck" className="check-trail">
            <span className="check-handler"></span>
        </label>
    </>
);

const SwitchB = (
    props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => (
    <label className="switch-b">
        <input type="checkbox" {...props} />
        <div>
            <span></span>
        </div>
    </label>
);

const SwitchC = (
    props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => (
    <div className="switch-c-container">
        <label className="switch-c">
            <input type="checkbox" {...props} /> <div></div>
        </label>
    </div>
);
export default Switch;

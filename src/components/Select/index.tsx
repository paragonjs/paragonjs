import * as React from "react";
import "./index.scss";

const a = ["1", "2", "3", "4", "5"];

interface SelectProps extends React.ButtonHTMLAttributes<HTMLSelectElement> {
    options: Array<string | number>;
    optionRenderer: React.ReactNode;
}

function exampleCustomOptionRenderer(options: Array<Record<string, string>>) {
    return (
        <>
            {options.map((option, i) => {
                return <option key={i}>{option.name}</option>;
            })}
        </>
    );
}

function exampleOptionRenderer(options: Array<string | number>) {
    return (
        <>
            {options.map((option, i) => {
                return <option key={i}>{option}</option>;
            })}
        </>
    );
}

export default function Select(props: SelectProps) {
    const { options, ...rest } = props;
    
    return (
        <select className="p1-select" {...rest}>
            {options
                ? options.map((a, i) => {
                      return (
                          <option key={i} className="p1-option">
                              {a}
                          </option>
                      );
                  })
                : props.children}
        </select>
    );
}

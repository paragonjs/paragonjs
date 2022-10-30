import * as React from "react";
import "./index.scss";

const a = ["1", "2", "3", "4", "5"];

interface SelectProps extends React.ButtonHTMLAttributes<HTMLSelectElement> {}
export default function Select(props: SelectProps) {
    return (
        <select className="p1-select">
            {a.map((a, i) => {
                return (
                    <option key={i} className="p1-option">
                        {a}
                    </option>
                );
            })}
        </select>
    );
}

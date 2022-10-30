import * as React from "react";
import "./index.scss";

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps) => {
    return (
        <div className="p1-spinner">
            <svg
                {...props}
                className={`p1-spinner-svg${props.className ? ` ${props.className}` : ""}`}
                width="20"
                height="20"
                strokeWidth="16.00"
                viewBox="-3.00 -3.00 106.00 106.00"
            >
                <path
                    className="p1-spinner-circle"
                    d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                ></path>
                <path
                    className="p1-spinner-stroke"
                    d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                    pathLength="280"
                    strokeDasharray="280 280"
                    strokeDashoffset="210"
                ></path>
            </svg>
        </div>
    );
};

export default Spinner;

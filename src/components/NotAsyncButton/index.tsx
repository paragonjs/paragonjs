import * as React from "react";
import "./index.scss";

const NotAsyncButton: React.FC = (): JSX.Element => {
    const [state, setState] = React.useState<string>("goodbye");

    return (
        <div className="not-async-button">
            <h2>{state}</h2>
        </div>
    );
};

export default NotAsyncButton;

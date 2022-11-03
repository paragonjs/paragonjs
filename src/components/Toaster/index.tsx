import * as React from "react";
import useToaster from "../../hooks/useToaster";
import Toast from "../Toast";
import "./index.scss";

const Toaster: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const { toasts } = useToaster();
    return (
        <div className="p1-toast-provider">
            {toasts &&
                toasts.map((toast) => {
                    return <Toast key={toast.toastKey}>{toast.message}</Toast>;
                })}
        </div>
    );
};

export default Toaster;

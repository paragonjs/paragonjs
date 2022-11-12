import * as React from "react";
import useToaster from "../../hooks/useToaster";
import Toast from "../Toast";
import "./index.scss";

const Toaster: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
    const { toasts } = useToaster();
    return (
        <div className="p1-toast-provider">
            {toasts &&
                toasts.map((toast, index) => {
                    return (
                        <Toast
                            key={toast.toastKey}
                            {...{ ...toast, index }}
                        >
                            {toast.message}
                        </Toast>
                    );
                })}
        </div>
    );
};

export default Toaster;

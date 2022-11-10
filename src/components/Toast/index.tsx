import "./index.scss";
import * as React from "react";
import useToaster from "../../hooks/useToaster";

const Toast: React.FC<ToastProps> = (props: ToastProps) => {
    const { removeToast } = useToaster();
    const { expiresAfter = 5000, fadesAfter = 4500, ...rest } = props;

    /**
     *
     * Random key generation - This is used to target animations to specific toasts and also for removing specific toasts.
     *
     */
    const key = React.useMemo(() => {
        return Math.floor(Math.random() * (99999999999 - 1) + 1);
    }, []);

    React.useEffect(() => {
        const element = document.querySelector(`.toast-key${key}`);

        if (element) {
            setTimeout(function () {
                element.classList.add("p1-fade");

                setTimeout(() => {
                    removeToast(key.toString());
                }, expiresAfter - fadesAfter);
            }, expiresAfter);
        }
    }, [key, removeToast, expiresAfter, fadesAfter]);

    return (
        <div
            {...rest}
            className={`p1-toast${props.className ? ` ${props.className}` : ""} toast-key${key}`}
        >
            {props.children}
        </div>
    );
};

export default Toast;

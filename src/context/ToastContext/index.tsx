import * as React from "react";
import ToastReducer from "./reducer";

const initial: ToastState = {
    toasts: [],
};

export const ToastContext = React.createContext<ToastContextInterface>([
    initial,
    () => {
        /*
         */
    },
]);

interface ToastProviderProps {
    children: React.ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps): JSX.Element => {
    const [state, dispatch]: [ToastState, React.Dispatch<ToastActions>] = React.useReducer(
        ToastReducer,
        initial
    );

    return <ToastContext.Provider value={[state, dispatch]}>{children}</ToastContext.Provider>;
};

export default ToastProvider;

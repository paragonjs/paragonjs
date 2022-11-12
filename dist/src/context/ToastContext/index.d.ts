import * as React from "react";
export declare const ToastContext: React.Context<ToastContextInterface>;
interface ToastProviderProps {
    children: React.ReactNode;
}
declare const ToastProvider: ({ children }: ToastProviderProps) => JSX.Element;
export default ToastProvider;

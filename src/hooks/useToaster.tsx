import * as React from "react";
import { ToastContext } from "../context/ToastContext";

enum ToasterActions {
    CREATE_TOAST = "CREATE_TOAST",
    REMOVE_TOAST = "REMOVE_TOAST",
    REMOVE_TOAST_AT_INDEX = "REMOVE_TOAST_AT_INDEX",
    CLEAN_TOASTER = "CLEAN_TOASTER",
}

/**
 *
 * useToaster
 *
 * Exposes functionality of the toaster component, allowing for easy access to toast-making (yum) and also cleaning the toaster to
 * reduce mold and germs in your application.
 *
 */
export default function useToaster(): {
    toasts: Array<ToastType>;
    createToast: (message: string, type?: ToastColorType) => void;
    removeToast: (toastKey: string) => void;
    removeToastAtIndex: (index: number) => void;
    cleanToaster: () => void;
} {
    const [state, dispatch]: ToastContextInterface =
        React.useContext<ToastContextInterface>(ToastContext);

    const { toasts } = state;

    function createToast(message: string, type: ToastColorType = "default") {
        const toastKey = Math.floor(Math.random() * (999999999999 - 1) + 1).toString();
        dispatch({
            type: ToasterActions.CREATE_TOAST,
            payload: {
                message,
                toastKey,
                type,
            },
        });
    }

    function removeToast(toastKey: string) {
        dispatch({
            type: ToasterActions.REMOVE_TOAST,
            payload: toastKey,
        });
    }

    function removeToastAtIndex(index: number) {
        dispatch({
            type: ToasterActions.REMOVE_TOAST_AT_INDEX,
            payload: index,
        });
    }

    function cleanToaster() {
        dispatch({
            type: ToasterActions.CLEAN_TOASTER,
            payload: null,
        });
    }
    return {
        toasts,
        createToast,
        removeToast,
        removeToastAtIndex,
        cleanToaster,
    };
}

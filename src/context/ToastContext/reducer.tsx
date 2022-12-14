import * as React from "react";

enum ToasterActions {
    CREATE_TOAST = "CREATE_TOAST",
    REMOVE_TOAST = "REMOVE_TOAST",
    REMOVE_TOAST_AT_INDEX = "REMOVE_TOAST_AT_INDEX",
    CLEAN_TOASTER = "CLEAN_TOASTER",
}

const ToastReducer: React.Reducer<ToastState, ToastActions> = (
    state: ToastState,
    action: ToastActions
) => {
    switch (action.type) {
        case ToasterActions.CREATE_TOAST:
            return {
                ...state,
                toasts: [action.payload, ...state.toasts],
            };
        case ToasterActions.REMOVE_TOAST:
            return {
                ...state,
                toasts: state.toasts.filter((a: ToastType) => {
                    return a.toastKey !== action.payload;
                }),
            };
        case ToasterActions.REMOVE_TOAST_AT_INDEX:
            return {
                ...state,
                toasts: [
                    ...state.toasts.slice(0, action.payload),
                    ...state.toasts.slice(action.payload + 1, state.toasts.length),
                ],
            };
        case ToasterActions.CLEAN_TOASTER:
            return {
                ...state,
                toasts: [],
            };

        default: {
            return {
                ...state,
            };
        }
    }
};

export default ToastReducer;

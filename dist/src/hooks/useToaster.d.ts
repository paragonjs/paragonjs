export default function useToaster(): {
    toasts: Array<ToastType>;
    createToast: (message: string, type?: ToastColorType) => void;
    removeToast: (toastKey: string) => void;
    removeToastAtIndex: (index: number) => void;
    cleanToaster: () => void;
};

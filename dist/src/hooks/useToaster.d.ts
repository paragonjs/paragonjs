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
    createToast: (args: CreateToast) => void;
    removeToast: (toastKey: string) => void;
    removeToastAtIndex: (index: number) => void;
    cleanToaster: () => void;
};

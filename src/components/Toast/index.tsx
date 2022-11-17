import "./index.scss";
import * as React from "react";
import useToaster from "../../hooks/useToaster";
import useDynamicClassname from "../../hooks/useDynamicClassname";

const Toast: React.FC<ToastProps> = (props: ToastProps) => {
    const { removeToast, removeToastAtIndex } = useToaster();
    const {
        index,
        toastKey,
        expiresAfter = 8000,
        fadesAfter = props.fadesAfter ? props.fadesAfter : expiresAfter - 1000,
        hasHeader = false,
        type = "",
        ...rest
    } = props;

    const ref = React.useRef<HTMLDivElement>(null);

    const handleToastRemoval = () => {
        removeToastAtIndex(index as number);
    };

    const classNames = useDynamicClassname({
        initialClassname: `p1-toast toast-key${toastKey}`,
        props: {
            type,
        },
        dynamicProps: {
            type: ["success", "danger", "warning", ""],
        },
    });

    React.useEffect(() => {
        if (ref && ref.current) {
            /**
             * Calculate height and position for animation; 15 pixels is added to the height of each item to serve as padding.
             */
            const height = ref.current.clientHeight + 15;
            const basePosition = Number(height) * Number(index);

            /**
             *
             * Animate 5 frames when the array changes, whether it is adding additional
             * toasts or the toasts being added are removed and the position of the toast changes.
             *
             */
            for (let i = 1; i <= 5; i++) {
                setTimeout(() => {
                    /**
                     * The base position of toast is calculated by its index postion.
                     *
                     * It's position changes at 1/5 of its height per frame, for a total of 5 frames or 200ms.
                     *
                     * When its index changes negatively, this same animation occurs in reverse for all toasts below the removed index.
                     */
                    const pos = basePosition + height * (i / 5);
                    if (ref.current) {
                        ref.current.style.transform = `translateY(${pos}px)`;
                    }
                }, i * 40);
            }
        }
    }, [index, toastKey, ref]);

    React.useEffect(() => {
        setTimeout(function () {
            if (ref && ref.current) {
                ref.current.classList.add("p1-fade");
            }
        }, fadesAfter);
    }, [removeToast, ref, toastKey, fadesAfter]);

    return (
        <div
            ref={ref}
            className={classNames}
            {...rest}
        >
            {hasHeader ? (
                <div className="p1-toast-heading">
                    <button
                        onClick={handleToastRemoval}
                        className="p1-close-toast"
                    >
                        <span>✕</span>
                    </button>
                </div>
            ) : null}
            <div className="p1-toast-body">{props.children}</div>
        </div>
    );
};

export default Toast;

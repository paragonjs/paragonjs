import * as React from "react";
import { createPopper } from "@popperjs/core";
import "./index.scss";

type Placement =
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end";

type Strategy = "absolute" | "fixed";

interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
    element: Element | HTMLElement;
    placement?: Placement;
    arrow?: boolean;
    strategy?: Strategy;
}

const Popover: React.FC<PopperProps> = (props: PopperProps) => {
    const { element, placement = "auto", arrow = false, strategy, children, ...rest } = props;

    React.useEffect(() => {
        const popper: HTMLElement = document.querySelector("#p1-tooltip");

        /**
         *
         * Typecheck that ReactNode is not a string for elementClass.
         *
         */
        if (!React.isValidElement(children)) {
            return null;
        }

        const elementClass = children.props.className;
        const arrowComponent = document.querySelector("#p1-popover-arrow");
        const elementComponent: HTMLElement = document.querySelector(`.${elementClass}`);

        createPopper(elementComponent, popper, {
            placement: placement ? placement : "auto",
            strategy: strategy,
            modifiers: [
                {
                    name: "arrow",
                    options: {
                        element: arrowComponent,
                        placement: "top",
                        padding: 12,
                    },
                },
                {
                    name: "offset",
                    options: {
                        offset: [0, 8],
                    },
                },
            ],
        });
    }, [children, placement, strategy]);

    return (
        <>
            {children}
            <div id="p1-tooltip" className="p1-tooltip" {...rest}>
                <>{element as Element}</>
                <div
                    id="p1-popover-arrow"
                    data-popper-arrow
                    style={{ display: arrow ? "flex" : "none" }}
                />
            </div>
        </>
    );
};

export default Popover;

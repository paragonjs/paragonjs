import * as React from "react";
import { NavbarContext } from "../context/NavbarContext";
import css from "dom-helpers/css";

interface UseNavbarContext {
    setCollapser: (element: HTMLElement) => void;
    setToggler: (element: HTMLElement) => void;
    setCollapserHeight: (height: number) => void;
    setExpanded: (_expanded: boolean) => void;
    toggler: HTMLElement | null;
    expanded: boolean;
    collapser: HTMLElement | null;
    collapserHeight: number;
    collapseAnimation: () => void;
}

enum EnumerableNavbarActions {
    SET_COLLAPSER = "SET_COLLAPSER",
    SET_TOGGLER = "SET_TOGGLER",
    SET_COLLAPSER_HEIGHT = "SET_COLLAPSER_HEIGHT",
    SET_EXPANDED = "SET_EXPANDED",
}

type Dimension = "width" | "height";

const animationFrames = 30;
const animationLength = 300;

const MARGINS: { [d in Dimension]: string[] } = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
};

function getDefaultDimensionValue(dimension: Dimension, elem: HTMLElement): number {
    const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
    const value = elem[offset];
    const margins = MARGINS[dimension];
    // @ts-ignore
    return value + parseInt(css(elem, margins[0]), 10) + parseInt(css(elem, margins[1]), 10);
}

export default function useNavbarContext(): UseNavbarContext {
    const [state, dispatch]: NavbarContextInterface = React.useContext(NavbarContext);

    /**
     * Context mutation methods
     */
    const setToggler = React.useCallback(
        (element: HTMLElement) => {
            dispatch({
                type: EnumerableNavbarActions.SET_TOGGLER,
                payload: element,
            });
        },
        [dispatch]
    );

    const setCollapser = React.useCallback(
        (element: HTMLElement) => {
            dispatch({
                type: EnumerableNavbarActions.SET_COLLAPSER,
                payload: element,
            });
        },
        [dispatch]
    );

    const setCollapserHeight = React.useCallback(
        (height: number) => {
            dispatch({
                type: EnumerableNavbarActions.SET_COLLAPSER_HEIGHT,
                payload: height,
            });
        },
        [dispatch]
    );

    const setExpanded = React.useCallback(
        (_expanded: boolean) => {
            dispatch({
                type: EnumerableNavbarActions.SET_EXPANDED,
                payload: _expanded,
            });
        },
        [dispatch]
    );

    /**
     *
     * Observer for collapsable navigation bar. Since there it's quite difficult to fluidly resize the navigation bar like an accordion with just css,
     * this helps setup the navigation state and styles to allow for a very smooth looking expand.
     *
     */
    const observerCallback = React.useCallback(() => {
        /**
         * Checks the client width on every observe; This ensures that if the client width is expanded beyond the mobile parameters that
         * the navbar immediately sets its styles correctly.
         */
        const clientWidth = Math.max(
            document.body.clientWidth,
            document.documentElement.clientWidth
        );

        if (state.collapser) {
            if (clientWidth > 768) {
                state.collapser.style.padding = "0px 0px";
            } else {
                state.collapser.style.display = "flex";
                state.collapser.style.height = "auto";
                state.collapser.style.padding = "2rem 2rem";
                setCollapserHeight(Math.ceil(getDefaultDimensionValue("height", state.collapser)));
                if (!state.expanded) {
                    state.collapser.style.display = "none";
                    state.collapser.style.height = "0px";
                    state.collapser.style.padding = "0px 2rem";
                }
            }
        }
    }, [setCollapserHeight, state.collapser, state.expanded]);

    /**
     *
     * Collapse animation; This animation has only 30 frames which it animtes over a period of 300ms.
     * Despite the low amount of overall frames, it looks incredibly smooth at virtually any height.
     *
     */
    const collapseAnimation = React.useCallback(() => {
        const { expanded, collapser, collapserHeight } = state;
        /**
         * If height is zero, we expand
         */
        if (expanded) {
            Array(animationFrames)
                .fill(0)
                .forEach((item, i) => {
                    setTimeout(() => {
                        if (i === animationFrames - 1) {
                            /**
                             * Force 0px on final iteration, this helps mitigate small discrepancies in rounding.
                             */
                            collapser.style.height = `0px`;
                            collapser.style.padding = `0rem 2rem`;
                            /**
                             * Display is set to none as the final action of the loop.
                             */
                            collapser.style.display = "none";

                            setExpanded(false);
                        } else {
                            collapser.style.height = `${
                                collapserHeight - (collapserHeight / animationFrames) * i
                            }px`;

                            collapser.style.padding = `${2 - (2 / animationFrames) * i}rem 2rem`;
                        }
                    }, (animationLength / animationFrames) * i);
                });
        } else {
            /**
             *
             * Add flex before expanding.
             */
            collapser.style.display = "flex";
            /**
             * Create a loop which will iterate {frames} times.
             */
            Array(animationFrames)
                .fill(0)
                .forEach((item, i) => {
                    /**
                     * Timeout is based on frame-rate
                     */
                    setTimeout(() => {
                        if (i === animationFrames - 1) {
                            collapser.style.height = `${collapserHeight}px`;
                            collapser.style.padding = `2rem 2rem`;
                            setExpanded(true);
                        } else {
                            collapser.style.height = `${(collapserHeight / animationFrames) * i}px`;
                            collapser.style.padding = `${(2 / animationFrames) * i}rem 2rem`;
                        }
                    }, (animationLength / animationFrames) * i);
                });
        }
    }, [state, setExpanded]);

    const observer = React.useMemo(() => new ResizeObserver(observerCallback), [observerCallback]);

    React.useEffect(() => {
        observer.observe(document.body);

        return () => {
            observer.unobserve(document.body);
        };
    }, [observer]);

    return {
        ...state,
        setExpanded,
        setCollapser,
        setToggler,
        setCollapserHeight,
        collapseAnimation,
    };
}

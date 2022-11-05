import { useCallback, useContext, useMemo } from "react";
import { NavbarContext } from "../context/NavbarContext";

interface UseNavbarContext {
    setCollapser: (element: HTMLElement) => void;
    setToggler: (element: HTMLElement) => void;
    setCollapserHeight: (height: number) => void;
    toggler: HTMLElement | null;
    collapser: HTMLElement | null;
    collapserHeight: number;
    collapseAnimation: () => void;
}

enum EnumerableNavbarActions {
    SET_COLLAPSER = "SET_COLLAPSER",
    SET_TOGGLER = "SET_TOGGLER",
    SET_COLLAPSER_HEIGHT = "SET_COLLAPSER_HEIGHT",
}

const animationFrames = 30;
const animationLength = 300;

export default function useNavbarContext(): UseNavbarContext {
    const [state, dispatch]: NavbarContextInterface = useContext(NavbarContext);

    const setToggler = useCallback(
        (element: HTMLElement) => {
            dispatch({
                type: EnumerableNavbarActions.SET_TOGGLER,
                payload: element,
            });
        },
        [dispatch]
    );

    const setCollapser = useCallback(
        (element: HTMLElement) => {
            dispatch({
                type: EnumerableNavbarActions.SET_COLLAPSER,
                payload: element,
            });
        },
        [dispatch]
    );

    const setCollapserHeight = useCallback(
        (height: number) => {
            dispatch({
                type: EnumerableNavbarActions.SET_COLLAPSER_HEIGHT,
                payload: height,
            });
        },
        [dispatch]
    );

    const collapseAnimation = useCallback(() => {
        const { collapser, collapserHeight } = state;
        /**
         * If height is zero, we expand
         */
        if (collapser.style.height === "0px") {
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
                        collapser.style.height =
                            i === animationFrames - 1
                                ? `${collapserHeight}px`
                                : `${(collapserHeight / animationFrames) * i}px`;
                    }, (animationLength / animationFrames) * i);
                });
        } else {
            Array(animationFrames)
                .fill(0)
                .forEach((item, i) => {
                    setTimeout(() => {
                        if (i === animationFrames - 1) {
                            /**
                             * Force 0px on final iteration, this helps mitigate small discrepancies in rounding.
                             */
                            collapser.style.height = `0px`;
                            /**
                             * Display is set to none as the final action of the loop.
                             */
                            collapser.style.display = "none";
                        } else {
                            collapser.style.height = `${
                                collapserHeight - (collapserHeight / animationFrames) * i
                            }px`;
                        }
                    }, (animationLength / animationFrames) * i);
                });
        }
    }, [state]);

    return {
        ...state,
        setCollapser,
        setToggler,
        setCollapserHeight,
        collapseAnimation,
    };
}

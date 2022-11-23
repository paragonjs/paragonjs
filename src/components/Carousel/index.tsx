import React, { useCallback, useEffect, useState } from "react";
import CarouselItem, { CarouselItemProps } from "./CarouselItem";
import anime from "animejs";
import "./index.scss";

interface CarouselProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    items: Array<T>;
    renderItem: (item: T) => React.ReactNode;
    gap?: number;
    onItemSelect?: (event: React.SyntheticEvent<HTMLDivElement>) => void;
    displayedItems?: number;
    carouselItemProps?: CarouselItemProps;
    buttonRenderer?: () => React.ReactNode;
    animationLength?: number;
}

interface CarouselState<T> {
    initialized: boolean;
    active: boolean;
    list: Array<T>;
    viewportWidth: number;
}

interface BaseCarouselItem {
    image: string;
}

function Carousel<T extends BaseCarouselItem>(props: CarouselProps<T>): JSX.Element {
    const {
        items,
        animationLength = 1250,
        renderItem,
        onItemSelect,
        carouselItemProps,
        displayedItems = 3,
        gap = 0,
        ...rest
    } = props;

    const [state, setState] = useState<CarouselState<T>>({
        initialized: false,
        active: false,
        list: [],
        viewportWidth: 0,
    });

    /**
     *
     * Create a ref to the body; This is for detecting viewport sizing, which is used later
     * to resize the carousel items whenever there is a viewport change.
     *
     */
    const body = React.useRef<HTMLElement>(document.querySelector("body"));
    /**
     *
     * Ref for the carousel container.
     *
     * This reference is used while animating transitions.
     *
     */
    const ref = React.useRef<HTMLDivElement>(null);

    /**
     *
     * An array of references to all carousel items. Since the amount is completely dynamic,
     * we use the users inputted array as a way to generate the correct amount of references
     * required for items going foward.
     *
     */
    const itemRefs = React.useRef<React.RefObject<HTMLInputElement>[]>(
        Array.from(new Array(Object.keys(duplicateArray(items, displayedItems)).length)).map(() =>
            React.createRef()
        )
    );

    /**
     *
     * Memoized travel distance of the carousel. This is used to calculate transitions when
     * the carousel is moved left or right.
     *
     */
    const carouselDistance = React.useMemo(() => (1 / displayedItems) * 100, [displayedItems]);

    /**
     *
     * Memoized CSS translate arguments. This is memoized secondary to the carousel distance because
     * we need to change this whenver the carousel distance is updating.
     *
     */
    const translate = React.useMemo(() => {
        return {
            left: `${-100 - carouselDistance}vw`,
            right: `${-100 + carouselDistance}vw`,
        };
    }, [carouselDistance]);

    /**
     *
     * Second part of animating carousel. After the initial transition which realigns the carousel,
     * this function executes the actual visible animation which is experienced.
     *
     * For left translations, we move from [-100vw - [1/displayedItems * 100]vw] to -100wv
     * For right translations, we move from [-100vw + [1/displayedItems * 100]vw] to -100wv
     *
     * The carousel starts off translated to -100vw, as this allows for movement without items disappearing off screen.
     *
     */
    const animateCarousel = useCallback(
        async (direction: boolean) => {
            if (ref && ref.current) {
                anime({
                    targets: ref.current,
                    translateX: direction
                        ? [`${-100 + carouselDistance}vw`, "-100vw"]
                        : [`${-100 - carouselDistance}vw`, "-100vw"],
                    duration: animationLength,
                    easing: "easeOutQuint",
                    direction: "normal",
                });
            }
        },
        [carouselDistance, animationLength]
    );

    /**
     *
     *  Handles the left button click of the carousel.
     *
     *  Requirements:
     *               - Active must be false.
     *
     *  Upon start, active is set to true and the carousel item list is mutated
     *  causing the first item in the array to be moved to the end of the array.
     *
     *              [A, B, C, D, E, F]   =>    [B, C, D, E, F, A]
     *
     *  This mutation happens simultaneously with a instant CSS change which translates
     *  the carousel the distance of one item, creating the illusion that the array did not
     *  actually change at all. After this, a timed animation is invoked which moves the array
     *  back to its original position.
     *
     *  Here is an attempt at illustrating this:
     *
     *  The viewable area in this example is denoted with {}
     *
     *  1.           [A, B, {C, D, E}, F]
     *  2.              [B, {C, D, E}, F, A]    <--- Array is reformatted, but also transitioned to make it seem like it hasn't changed
     *  3.           [B, C, {D, E, F}, A]       <--- Array is transitioned over its animation time back to its original position.
     *
     *  This sequence of events allows us to continuously move the carousel in one direction infinitely by rotating items.
     *
     */
    const handleLeftCallback = React.useCallback(async () => {
        if (state.active) return;

        setState({
            ...state,
            active: true,
            list: fromLastToFirst(state.list),
        });

        anime({
            targets: ref.current,
            translateX: [translate.left],
            duration: 0,
            easing: "linear",
            direction: "normal",
        });

        animateCarousel(false);
    }, [state, animateCarousel, translate]);

    /**
     *
     *  Handles the right button click of the carousel.
     *
     *  Requirements:
     *               - Active must be false.
     *
     *  Upon start, active is set to true and the carousel item list is mutated
     *  causing the last item in the array to be moved to the start of the array.
     *
     *              [A, B, C, D, E, F]   =>    [F, A, B, C, D, E]
     *
     *  This mutation happens simultaneously with a instant CSS change which translates
     *  the carousel the distance of one item, creating the illusion that the array did not
     *  actually change at all. After this, a timed animation is invoked which moves the array
     *  back to its original position.
     *
     *  Here is an attempt at illustrating this:
     *
     *  The viewable area in this example is denoted with {}
     *
     *  1.           [A, B, {C, D, E}, F]
     *  2.        [F, A, B, {C, D, E}]          <--- Array is reformatted, but also transitioned to make it seem like it hasn't changed
     *  3.           [F, A, {B, C, D}, E]       <--- Array is transitioned over its animation time back to its original position.
     *
     *  This sequence of events allows us to continuously move the carousel in one direction infinitely by rotating items.
     *
     */
    const handleRightCallback = React.useCallback(async () => {
        if (state.active) return;

        setState({
            ...state,
            active: true,
            list: fromFirstToLast(state.list),
        });

        anime({
            targets: ref.current,
            translateX: [translate.right],
            duration: 0,
            easing: "linear",
            direction: "normal",
        });

        animateCarousel(true);
    }, [state, animateCarousel, translate]);

    /**
     *
     * Initializes the carousel by applying the user selected props to the carousel items.
     * This sets width and margins for items onload, and also runs whenever the viewport
     * may change to maintain continuity.
     *
     */
    const intializeCallback = useCallback(() => {
        if (!state.initialized) {
            setState({
                ...state,
                initialized: true,
            });

            const width = (document.querySelector("body") as HTMLElement).clientWidth;
            const adjustedWidth = getDisplayItemSize(width, displayedItems, gap);

            for (const item of itemRefs.current) {
                if (item.current) {
                    item.current.style.flex = `0 0 ${adjustedWidth}px`;
                    item.current.style.marginLeft = `${gap / 2}px`;
                    item.current.style.marginRight = `${gap / 2}px`;
                }
            }
        }
    }, [state, itemRefs, displayedItems, gap]);

    /**
     *
     * Resize observer callback which helps maintain the carousel between viewport changes.
     * The hope is that most users do not require to constantly change their viewport while
     * on a webpage, but this is meant to preserve the styling in the chance that they do.
     *
     */
    const observerCallback: ResizeObserverCallback = React.useCallback(
        (entries: ResizeObserverEntry[]) => {
            if (entries) {
                const { width } = entries[0].contentRect;
                if (state.viewportWidth !== width) {
                    setState({
                        ...state,
                        viewportWidth: width,
                        initialized: false,
                    });
                }
            }
        },
        [state]
    );

    useEffect(() => {
        const element = body.current;

        const observer = new ResizeObserver(observerCallback);

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [body, observerCallback]);

    useEffect(() => {
        if (!state.list.length) {
            setState({
                ...state,
                list: duplicateArray(items, displayedItems),
            });
        } else {
            intializeCallback();
        }
    }, [state, items, displayedItems, intializeCallback]);

    useEffect(() => {
        if (state.active) {
            setTimeout(() => {
                setState({
                    ...state,
                    active: false,
                });
            }, animationLength);
        }
    }, [state, animationLength]);

    return (
        <div
            className="p1-carousel-container"
            {...rest}
        >
            <button
                className="p1-carousel-button p1-carousel-left"
                onClick={handleRightCallback}
            >
                {"<"}
            </button>
            <div
                ref={ref}
                className="p1-carousel"
            >
                {state.list.map((item, index) => {
                    return (
                        <CarouselItem
                            ref={itemRefs.current[index]}
                            key={index}
                            {...carouselItemProps}
                            handleClick={onItemSelect}
                        >
                            {renderItem(item)}
                        </CarouselItem>
                    );
                })}
            </div>
            <button
                className="p1-carousel-button  p1-carousel-right"
                onClick={handleLeftCallback}
            >
                {">"}
            </button>
        </div>
    );
}

/**
 *
 * For the carousel to work smoothly, we duplicate the array to create enough items to pad it on the right and left.
 *
 * In the case that the selected displayItem amount is less than the size of the given items, we also expand the array.
 *
 * This ensures that the carousel always has enough items to operate without any blank spaces being shown.
 *
 */
function duplicateArray<T>(array: Array<T>, displayedItems: number): Array<T> {
    const duplicated = [...array, ...array];
    if (duplicated.length < displayedItems * 2) {
        return duplicateArray(duplicated, displayedItems);
    }
    return duplicated;
}

/**
 *
 * Simply unshifts and concats that item to the array.
 *
 */
function fromFirstToLast<T>(array: Array<T>): Array<T> {
    return [...array.slice(1), array[0]];
}

/**
 *
 * Simply pops the last item from the array and pushes it into the beginnning of the array.
 *
 */
function fromLastToFirst<T>(array: Array<T>): Array<T> {
    return [array[array.length - 1], ...array.slice(0, array.length - 1)];
}

/**
 *
 * Calculates the width of displayed items within the carousel.
 *
 */
function getDisplayItemSize(width: number, displayedItems: number, gap: number) {
    return width / displayedItems - gap;
}

export default Carousel;

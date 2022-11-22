import React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import { createPopper } from "@popperjs/core";
import "./index.scss";

/**
 * @todo Update Popover component and implement it here instead of rendering a custom-popover for this component.
 */

interface RenderItemProps<T> {
    item: T;
    active?: boolean;
    handleClick?: (event: React.SyntheticEvent<HTMLDivElement>) => void;
}

interface SelectProps<T extends BaseSelectType<T>> extends React.HTMLAttributes<HTMLDivElement> {
    items: Array<T>;
    selectedItem: T;
    onItemSelect?: (item: T, e: React.SyntheticEvent<HTMLDivElement>) => void;
    renderItem?: (item: T, props: RenderItemProps<T>) => React.ReactNode | HTMLElement;
    renderSelected?: (item: T, props: RenderItemProps<T>) => HTMLElement;
    open?: boolean;
}

interface SelectState {
    open: boolean;
}

type BaseSelectType<Type> = { name?: string; value?: Type; active?: boolean };

class Select<T extends BaseSelectType<T>> extends React.Component<SelectProps<T>, SelectState> {
    public state: SelectState = {
        open: false,
    };

    private ref: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    private popover: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    private arrow: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

    /**
     *
     *  Pull props while maintaining default renderers for easy plug-and-play usage.
     *
     */

    public handleFocus = () => this.setState({ open: true });

    public handleUnfocus = () => this.setState({ open: false });

    /**
     *
     * Handles logic associated with selecting an element and calling user supplied onItemSelect function.
     *
     * This includes setting open to false, which results in the menu disappearing.
     *
     * Once these variables are set, the user supplied "onItemSelect" function is called.
     *
     */
    public handleItemSelect = (item: T, event: React.SyntheticEvent<HTMLDivElement>) => {
        if (this.ref.current) {
            this.ref.current.blur();
            this.setState({
                open: false,
            });

            this.props.onItemSelect?.(item, event);
        }
    };

    /**
     *
     * Renders a popper.js popper along with an arrow component which points to the primary component
     *
     */
    public componentDidUpdate() {
        const _arrow: HTMLElement | null = this.arrow.current ? this.arrow.current : null;

        /**
         *
         * Placement is always bottom, but if it for some reason will not fit, the option below
         *
         * allows for the component did flip to the top side and be rendered there instead.
         *
         */

        if (this.ref.current && this.popover.current) {
            createPopper(this.ref.current, this.popover.current, {
                placement: "bottom",
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: ["top"],
                        },
                    },
                    /**
                     *
                     * Offset is set to reposition the "popper" overlay so tha the arrow can be appropriately placed.
                     *
                     * Future updates should include a way to make this dynamic and adjustable by user, while maintaining
                     *
                     * simplistic preset which can be used easily without the need to adjust unless absolutely needed.
                     *
                     */
                    {
                        name: "offset",
                        options: {
                            offset: [0, 20],
                        },
                    },
                    /**
                     *
                     * Renders arrow here, this can be made optional in the future to allow users to choose whether or
                     *
                     * not they want to render an arrow instead of showing it.
                     *
                     */
                    {
                        name: "arrow",
                        options: {
                            element: _arrow,
                        },
                    },
                ],
            });
        }
    }

    public render() {
        const {
            items = [],
            renderItem = defaultRenderItem,
            renderSelected = defaultRenderSelectedItem,
            open = this.state.open,
            selectedItem,
            ...rest
        } = this.props;

        /**
         *
         * Creates a renderable component from the user supplied function,
         * this allows for props and keys to be applied to each element.
         *
         */

        const SelectListOption: React.FC<RenderItemProps<T>> = ({
            item,
            ...rest
        }: RenderItemProps<T>) => {
            return React.cloneElement(
                renderItem(item, {
                    item,
                    handleClick: (event) =>
                        this.handleItemSelect(item, event as React.SyntheticEvent<HTMLDivElement>),
                    ...rest,
                }) as React.ReactElement
            );
        };

        const SelectedComponent: React.FC<RenderItemProps<T & BaseSelectType<T>>> = ({
            item,
            ...rest
        }: RenderItemProps<T & BaseSelectType<T>>) => {
            return React.cloneElement(
                renderSelected(item, {
                    item,
                    active: true,
                    ...rest,
                }) as React.ReactElement
            );
        };

        return (
            <div
                ref={this.ref}
                tabIndex={0}
                className={this.props.className}
                onFocus={this.handleFocus}
                onBlur={this.handleUnfocus}
                {...rest}
            >
                <div className="p1-select-selected">
                    <SelectedComponent item={selectedItem} />
                </div>
                <div
                    ref={this.popover}
                    className="p1-select-popover"
                    style={{ display: open ? "flex" : "none" }}
                >
                    <div
                        ref={this.arrow}
                        id="select-arrow"
                        data-popper-arrow
                    ></div>
                    <div className="p1-select-options-container">
                        <div>
                            <div className="p1-select-options">
                                {items.map((item, key) => {
                                    return (
                                        <SelectListOption
                                            key={key}
                                            {...item}
                                            item={item}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 *
 * Default renderers are below.
 * These take the place of user supplied renderers if they do supply a renderer themselves,
 *
 */
const defaultRenderSelectedItem = <T extends BaseSelectType<T>>(
    item: T,
    props: RenderItemProps<T>
) => {
    if (!item) return null;

    return (
        <div
            className="p1-select-selected"
            onClick={props.handleClick}
        >
            {item && item.name
                ? item.name
                : item && item.value && typeof item.value === "string"
                ? item.value
                : null}
        </div>
    );
};

const defaultRenderItem = <T extends BaseSelectType<T>>(item: T, props: RenderItemProps<T>) => {
    if (!item) return null;

    return (
        <div
            className="p1-select-option"
            onClick={props.handleClick}
        >
            {item && item.name ? item.name : typeof item.value === "string" ? item.value : null}
        </div>
    );
};

/**
 *
 * Renders Class component wrapped with UseDynamicClassname hook;
 * This allows for usage of hook with class component; Beyond that, there isn't much difference.
 *
 */
const withHooks = <T extends BaseSelectType<T>>(
    Component: React.ComponentClass<SelectProps<T>>
) => {
    return function Select(props: SelectProps<T>) {
        const classNames = useDynamicClassname({
            initialClassname: "p1-select",
            props: {},
            dynamicProps: {},
        });

        return (
            <Component
                className={classNames}
                {...props}
            />
        );
    };
};

export default withHooks(Select);

import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import "./index.scss";

type TabList = {
    [name: string]: () => JSX.Element;
};

function useableIndex(index: Array<string>, current: number): string {
    if (index.length === 0) return index[0];
    if (current >= index.length) {
        return useableIndex(index, current - index.length);
    } else {
        return index[current];
    }
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultTab: keyof TabList;
    active: keyof TabList;
    tabs: TabList;
    colorIndex?: Array<string>;
}

interface TabButtonProps {
    index: number;
    name: string;
    active: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>, index: number) => void;
}

const TabButton = React.forwardRef(
    (
        { name, active, index, onClick }: TabButtonProps,
        ref: React.ForwardedRef<HTMLButtonElement>
    ) => {
        TabButton.displayName = "TabButton";
        const classNames = `p1-tab-button${active ? " active" : ""}`;

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            onClick(event, index);
        };

        return (
            <button
                ref={ref}
                name={name}
                className={classNames}
                onClick={handleClick}
            >
                {name}
            </button>
        );
    }
);

const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
    const {
        tabs,
        defaultTab = Object.keys(tabs)[0],
        colorIndex = ["#ff9f43", "#4cd137", "#0984e3", "#ee5253", "#f368e0", "#e84393"],
        ...rest
    } = props;
    const [active, setActive] = React.useState<keyof TabList>(defaultTab);
    const buttons = React.useRef<React.RefObject<HTMLButtonElement>[]>(
        Array.from(new Array(Object.keys(tabs).length)).map(() => React.createRef())
    );
    const ref = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        if (ref.current && buttons.current[0] && buttons.current[0].current) {
            ref.current.style.height = `4px`;
            ref.current.style.width = `${buttons.current[0].current.clientWidth}px`;
            ref.current.style.background = "#0984e3";
        }
    }, [buttons]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        if (!ref.current) return;
        if (!buttons.current) return;

        const current = index;
        const width = (buttons.current[index].current as HTMLButtonElement).clientWidth || 0;

        ref.current.style.background = useableIndex(colorIndex, current);
        ref.current.style.transform = `translateX(${width * current}px)`;
        setActive(event.currentTarget.name);
    };

    const classNames = useDynamicClassname({
        initialClassname: "p1-tabs",
        props: {},
        dynamicProps: {},
    });

    const ChildComponent = React.useMemo(() => tabs[active], [tabs, active]);

    return (
        <div
            className={classNames}
            {...rest}
        >
            <div className="p1-tab-menu">
                <span
                    ref={ref}
                    className="glider"
                />
                {Object.keys(tabs).map((tab, index) => {
                    return (
                        <TabButton
                            ref={buttons.current[index]}
                            index={index}
                            key={tab}
                            active={active === tab}
                            name={tab}
                            onClick={handleClick}
                        />
                    );
                })}
            </div>
            <div className="p1-tab-container">
                <ChildComponent />
            </div>
        </div>
    );
};

export default Tabs;

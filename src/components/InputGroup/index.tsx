import * as React from "react";
import useDynamicClassname from "../../hooks/useDynamicClassname";
import Label from "../Label";
import "./index.scss";

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    sublabel?: string;
    direction?: "horizontal" | "vertical";
    /**
     * @todo Add bottom label
     */
}

interface ComponentWithMaybeLabelProps extends InputGroupLabelProps {
    ref: React.Ref<HTMLElement>;
}

interface InputGroupLabelProps extends LabelProps {
    childElement: React.ReactNode[];
}

const ComponentMaybeWithLabel: React.FC<ComponentWithMaybeLabelProps> =
    React.forwardRef(function Children(
        props: InputGroupLabelProps,
        ref: React.ForwardedRef<HTMLElement>
    ) {
        const { childElement, ...rest } = props;

        return (
            <Label {...rest}>
                {childElement.map((child) => {
                    if (!React.isValidElement(child)) {
                        console.log("child invalid");
                        return;
                    }

                    if (!ref) {
                        console.log("no ref");
                        return;
                    }
                    return React.cloneElement(child, ref);
                })}
            </Label>
        );
    });

const InputGroup: React.FC<InputGroupProps> = (props: InputGroupProps) => {
    const {
        className,
        label,
        sublabel,
        children,
        direction = "horizontal",
        ...rest
    } = props;
    const [htmlFor, setHtmlFor] = React.useState<string>("");
    const ref: React.RefObject<HTMLElement> = React.useRef<HTMLElement>(null);

    const classNames = useDynamicClassname({
        initialClassname: "p1-inputgroup",
        props: {
            className,
            direction,
            label,
            sublabel,
        },
        dynamicProps: {
            direction: ["horizontal", "vertical"],
        },
    });

    const childElement = React.useMemo(
        () => React.Children.map(children, (child) => child),
        [children]
    );

    React.useEffect(() => {
        if (ref && ref.current) {
            setHtmlFor((ref.current as HTMLElement).id);
        }
    }, [ref]);

    return (
        <div className={classNames} {...rest}>
            <ComponentMaybeWithLabel
                ref={ref}
                {...{
                    childElement: childElement ? childElement : [],
                    label,
                    sublabel,
                    htmlFor,
                }}
            />
        </div>
    );
};

export default InputGroup;

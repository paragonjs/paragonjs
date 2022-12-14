import * as React from "react";

export interface UseDynamicContextProps {
    initialClassname: string;
    props: Record<string, any>;
    dynamicProps: DynamicProp;
}

export type DynamicProp = Record<string, Array<string | boolean | number>>;

export default function useDynamicClassname({
    initialClassname,
    props,
    dynamicProps,
}: UseDynamicContextProps) {
    return React.useMemo(() => {
        const classNames: Array<string> = [];
        classNames.push(initialClassname);
        if (props.className) classNames.push(props.className);

        for (const propName of Object.keys(dynamicProps)) {
            if (props[propName] || props[propName] === 0) {
                const caller = useDynamicClassname.caller as React.ComponentType<any>;
                const name = caller.displayName || caller.name;

                if (!dynamicProps[propName].includes(props[propName])) {
                    throw Error(
                        `Prop with name "${propName}" in component <${name}/> cannot be "${props[propName]}"`
                    );
                }

                /// Check for number
                if (typeof props[propName] === "number") {
                    classNames.push(`p1-${propName}-${props[propName]}`);
                }
                /// Check boolean
                else if (props[propName] === true) {
                    classNames.push(`p1-${propName}`);
                }
                /// Check strings
                else {
                    classNames.push(`p1-${propName}-${props[propName]}`);
                }
            }
        }

        return classNames.join(" ");
    }, [initialClassname, props, dynamicProps]);
}

export interface UseDynamicContextProps {
    initialClassname: string;
    props: Record<string, any>;
    dynamicProps: DynamicProp;
}
export declare type DynamicProp = Record<string, Array<string | boolean | number>>;
export default function useDynamicClassname({ initialClassname, props, dynamicProps, }: UseDynamicContextProps): string;

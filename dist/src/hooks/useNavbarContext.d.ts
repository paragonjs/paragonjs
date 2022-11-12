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
export default function useNavbarContext(): UseNavbarContext;
export {};

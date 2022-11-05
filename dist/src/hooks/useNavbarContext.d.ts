interface UseNavbarContext {
    setCollapser: (element: HTMLElement) => void;
    setToggler: (element: HTMLElement) => void;
    setCollapserHeight: (height: number) => void;
    toggler: HTMLElement | null;
    collapser: HTMLElement | null;
    collapserHeight: number;
    collapseAnimation: () => void;
}
export default function useNavbarContext(): UseNavbarContext;
export {};

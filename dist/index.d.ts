interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick?: (...args: any) => void;
    color?: "blue" | "red" | "green" | "yellow" | "pink" | "purple" | "lavander" | "berry";
    fill?: boolean;
    children: React.ReactNode;
}

type LFive = 0 | 1 | 2 | 3 | 4;

type justifyContentOptions =
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "auto"
    | "center"
    | "space-evenly"
    | "stretch"
    | "unset"
    | "revert";

type alignItemsOptions =
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch"
    | "revert"
    | "unset";

interface AsyncButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {
    onClick?: (...args: any) => Promise<any>;
    loading?: boolean;
}

interface CardProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    elevation: LFive;
    radius: LFive;
    variant?: "light" | "dark";
    padding: LFive;
}

interface ColumnProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fluid: boolean;
    justify: justifyContentOptions;
    align: alignItemsOptions;
    padding: LFive;
    variant: "light" | "dark";
    gap: LFive;
}

interface RowProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fluid: boolean;
    justify: justifyContentOptions;
    align: alignItemsOptions;
    padding: LFive;
    gap: LFive;
}

interface SpinnerProps extends React.SVGProps<undefined> {
    fill?: string;
}

interface NavbarCollapseProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    position?: "right" | "left";
}

interface NavbarHeadingProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fontSize: "small" | "medium" | "large";
}

interface NavbarTogglerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLDivElement> {
    color?: string;
}

interface NavbarProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: "light" | "dark";
    Heading?: typeof NavHeading;
    Collapse?: React.FC<NavbarCollapseProps>;
    Link?: React.FC<NavbarLinkProps>;
    Toggler?: React.FC<NavbarTogglerProps>;
    direction?: "vertical" | "horizontal";
    centered?: boolean;
}

/**
 *
 * Toast
 *
 */

interface ToastType {
    message: string;
    type: ToastColorType;
    toastKey: string;
}

type ToastColorType = "success" | "dangerous" | "warning" | "default";

interface ToastState {
    toasts: Array<ToastType>;
}

interface ToastActionArgs {
    CREATE_TOAST: ToastType;
    REMOVE_TOAST: string;
    REMOVE_TOAST_AT_INDEX: number;
    CLEAN_TOASTER: null;
}

type ToastActions = {
    [Key in keyof ToastActionArgs]: {
        type: Key;
        payload: ToastActionArgs[Key];
    };
}[keyof ToastActionArgs];

enum ToasterActions {
    CREATE_TOAST = "CREATE_TOAST",
    REMOVE_TOAST = "REMOVE_TOAST",
    REMOVE_TOAST_AT_INDEX = "REMOVE_TOAST_AT_INDEX",
    CLEAN_TOASTER = "CLEAN_TOASTER",
}

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    expiresAfter?: number;
    fadesAfter?: number;
    fallAnimation?: AnimeAnimation;
    fadeAnimation?: AnimeAnimation;
}

type ToastContextInterface = [ToastState, React.Dispatch<ToastActions>];

type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null;

interface AnimeAnimation extends anime.AnimeParams {
    targets?: AnimeTarget;
    keyframes?: Array<anime.AnimeAnimParams>;
    duration?: number;
    direction?: "normal" | "alternate";
    easing?: anime.AnimeParams["easing"];
    loop?: boolean;
}

/**
 *
 * Navbar Context
 *
 */

interface NavbarState {
    collapser: HTMLElement | null;
    toggler: HTMLElement | null;
    collapserHeight: number;
    expanded: boolean;
}

type NavbarContextInterface = [NavbarState, React.Dispatch<NavbarActions>];

enum EnumerableNavbarActions {
    SET_COLLAPSER = "SET_COLLAPSER",
    SET_TOGGLER = "SET_TOGGLER",
    SET_COLLAPSER_HEIGHT = "SET_COLLAPSER_HEIGHT",
    SET_EXPANDED = "SET_EXPANDED",
}
interface NavbarActionsArgs {
    SET_COLLAPSER: HTMLElement;
    SET_TOGGLER: HTMLElement;
    SET_COLLAPSER_HEIGHT: number;
    SET_EXPANDED: boolean;
}

type NavbarActions = {
    [Key in keyof NavbarActionsArgs]: {
        type: Key;
        payload: NavbarActionsArgs[Key];
    };
}[keyof NavbarActionsArgs];

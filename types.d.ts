interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick?: (...args: any) => void;
    color?: "blue" | "red" | "green" | "yellow" | "pink" | "purple" | "lavander" | "berry";
    fill?: boolean;
}

type ZeroToFive = 0 | 1 | 2 | 3 | 4;

type JustifyContentOptions =
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

type AlignItemsOptions =
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch"
    | "revert"
    | "unset";

interface ContainerProps {
    justify?: JustifyContentOptions;
    align?: AlignItemsOptions;
    padding?: ZeroToFive;
    gap?: ZeroToFive;
    fluid?: boolean;
}

interface AsyncButtonProps extends ButtonProps {
    onClick?: (...args: any) => Promise<any>;
    loading?: boolean;
}

interface CardProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    elevation: ZeroToFive;
    radius: ZeroToFive;
    variant?: "light" | "dark";
    padding: ZeroToFive;
}

interface ColumnProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        ContainerProps {}

interface RowProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        ContainerProps {}

interface SpinnerProps extends React.HTMLAttributes<HTMLOrSVGElement> {
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

interface NavbarLinkProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: string;
}

interface NavbarProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: "light" | "dark";
    direction?: "vertical" | "horizontal";
    centered?: boolean;
    Heading?: React.FC<NavbarHeadingProps>;
    Collapse?: React.FC<NavbarCollapseProps>;
    Link?: React.FC<NavbarLinkProps>;
    Toggler?: React.FC<NavbarTogglerProps>;
}

/**
 *
 * Toast
 *
 */

interface ToastType {
    message: string;
    //type: ToastColorType;
    toastKey: string;
    expiresAfter: number;
    hasHeader: boolean;
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

interface CreateToast {
    message: string;
    //type?: ToastColorType;
    expiresAfter?: number;
    hasHeader?: boolean;
}

type ToastActions = {
    [Key in keyof ToastActionArgs]: {
        type: Key;
        payload: ToastActionArgs[Key];
    };
}[keyof ToastActionArgs];

declare enum ToasterActions {
    CREATE_TOAST = "CREATE_TOAST",
    REMOVE_TOAST = "REMOVE_TOAST",
    REMOVE_TOAST_AT_INDEX = "REMOVE_TOAST_AT_INDEX",
    CLEAN_TOASTER = "CLEAN_TOASTER",
}

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    expiresAfter?: number;
    fadesAfter?: number;
    index?: number;
    gap?: number;
    toastKey?: string;
    hasHeader?: boolean;
}
type ToastContextInterface = [ToastState, React.Dispatch<ToastActions>];

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

declare enum EnumerableNavbarActions {
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

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    label?: string;
    sublabel?: string;
}

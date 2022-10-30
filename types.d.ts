interface AsyncButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (...args: any) => Promise<any>;
    color?: "blue" | "red" | "green" | "yellow" | "pink" | "purple" | "lavander" | "berry";
    fill?: boolean;
    loading?: boolean;
    children: React.ReactNode;
}

interface CardProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
    elevation: 0 | 1 | 2 | 3 | 4;
    radius: 0 | 1 | 2 | 3 | 4;
    variant?: "light" | "dark";
    padding: 0 | 1 | 2 | 3 | 4;
}

interface ColumnProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fluid: boolean;
}

interface RowProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fluid: boolean;
    gap: number;
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
    variant?: string;
    Heading?: typeof NavHeading;
    Collapse?: React.FC<NavbarCollapseProps>;
    Link?: React.FC<NavbarLinkProps>;
    Toggler?: React.FC<NavbarTogglerProps>;
    direction?: "vertical" | "horizontal";
    centered?: boolean;
}

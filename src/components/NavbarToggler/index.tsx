import * as React from "react";
import useNavbarContext from "../../hooks/useNavbarContext";
import "./index.scss";

export interface NavbarTogglerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLDivElement> {
    color?: string;
}

const NavbarToggler: React.FC<NavbarTogglerProps> = (props: NavbarTogglerProps) => {
    const { setToggler, toggler, collapseAnimation } = useNavbarContext();
    const ref = React.useRef<HTMLButtonElement>();

    React.useEffect(() => {
        if (ref && ref.current) {
            setToggler(ref.current);
        }
    }, [ref, setToggler]);

    React.useEffect(() => {
        if (toggler) {
            toggler.addEventListener("click", collapseAnimation);
        }

        return () => {
            if (toggler) {
                toggler.removeEventListener("click", collapseAnimation);
            }
        };
    }, [toggler, collapseAnimation]);

    return (
        <button
            ref={ref}
            className={`p1-navbar-toggler ${props.className ? ` ${props.className}` : ""}`}
            type="button"
            data-toggle="collapse"
            data-target="p1-navbar-collapse"
        >
            &#9776;
        </button>
    );
};

NavbarToggler.displayName = "NavbarToggler";

export default NavbarToggler;

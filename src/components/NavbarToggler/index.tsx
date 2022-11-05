import * as React from "react";
import useNavbarContext from "../../hooks/useNavbarContext";
import "./index.scss";

export interface NavbarTogglerProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: string;
}

const animationFrames = 30;
const animationLength = 300;

const NavbarToggler: React.FC<NavbarTogglerProps> = (props: NavbarTogglerProps) => {
    const { setToggler, toggler, collapseAnimation } = useNavbarContext();
    const [show, setShow] = React.useState<boolean>(false);
    const ref = React.useRef<HTMLButtonElement>();

    const handleClick = () => {
        const navs = document.querySelectorAll(".p1-navbar-collapse");
        if (show) {
            //navs.forEach((nav) => nav.classList.add("navbar-collapse-hide"));
            //navs.forEach((nav) => nav.classList.remove("navbar-collapse-show"));
        } else {
            //navs.forEach((nav) => nav.classList.remove("navbar-collapse-hide"));
            //navs.forEach((nav) => nav.classList.add("navbar-collapse-show"));
        }
        setShow(!show);
    };

    React.useEffect(() => {
        if (ref && ref.current) {
            setToggler(ref.current);
        }
    }, [ref, setToggler]);

    React.useEffect(() => {
        if (toggler) {
            toggler.addEventListener("click", collapseAnimation);
        }
    }, [toggler, collapseAnimation]);

    return (
        <button
            ref={ref}
            className={`p1-navbar-toggler ${props.className ? ` ${props.className}` : ""}`}
            type="button"
            data-toggle="collapse"
            data-target="p1-navbar-collapse"
            onClick={handleClick}
        >
            &#9776;
        </button>
    );
};

NavbarToggler.displayName = "NavbarToggler";

export default NavbarToggler;



function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var invariant = require('tiny-invariant');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var invariant__default = /*#__PURE__*/_interopDefaultLegacy(invariant);

___$insertStyle(".p1-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-radius: 0.25rem;\n  height: 30px;\n  width: 100px;\n  box-shadow: none;\n  border: none;\n  outline: none;\n  padding: 0.2rem 0.5rem;\n  font-size: 1rem;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: transform 150ms ease;\n}\n.p1-button.p1-fill {\n  width: 100%;\n}\n.p1-button:active {\n  box-shadow: 1px 1px 4px rgba(30, 30, 30, 0.3);\n  transform: translateY(2px);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.p1-blue {\n  background-color: #0984e3;\n  color: #eaeaea;\n}\n.p1-blue .p1-spinner .p1-spinner-svg path {\n  stroke: #888;\n}\n.p1-blue .p1-spinner .p1-spinner-svg .p1-spinner-stroke {\n  stroke: #fff;\n}\n.p1-blue:hover {\n  background-color: #218ada;\n}\n.p1-blue:active {\n  background-color: #2a7dbd;\n}\n\n.p1-purple {\n  background-color: #6c5ce7;\n  color: #eaeaea;\n}\n.p1-purple .p1-spinner .p1-spinner-svg path {\n  stroke: #888;\n}\n.p1-purple .p1-spinner .p1-spinner-svg .p1-spinner-stroke {\n  stroke: #fff;\n}\n.p1-purple:hover {\n  background-color: #4f3dd9;\n}\n.p1-purple:active {\n  background-color: #3522c2;\n}\n\n.p1-red {\n  background-color: #eb4d4b;\n  color: #eaeaea;\n}\n.p1-red .p1-spinner .p1-spinner-svg path {\n  stroke: #888;\n}\n.p1-red .p1-spinner .p1-spinner-svg .p1-spinner-stroke {\n  stroke: #fff;\n}\n.p1-red:hover {\n  background-color: #e93c39;\n}\n.p1-red:active {\n  background-color: #d6201d;\n}\n\n.p1-yellow {\n  background-color: #fdcb6e;\n  color: #212121;\n}\n.p1-yellow:hover {\n  background-color: #f4bd56;\n}\n.p1-yellow:active {\n  background-color: #e6a937;\n}\n\n.p1-pink {\n  background-color: #e84393;\n  color: #fafafa;\n}\n.p1-pink .p1-spinner .p1-spinner-svg path {\n  stroke: #888;\n}\n.p1-pink .p1-spinner .p1-spinner-svg .p1-spinner-stroke {\n  stroke: #fff;\n}\n.p1-pink:hover {\n  background-color: #cb2e7a;\n}\n.p1-pink:active {\n  background-color: #c3186b;\n}\n\n.p1-green {\n  background-color: #009432;\n  color: #eaeaea;\n}\n.p1-green .p1-spinner .p1-spinner-svg path {\n  stroke: #aaa;\n}\n.p1-green .p1-spinner .p1-spinner-svg .p1-spinner-stroke {\n  stroke: #fff;\n}\n.p1-green:hover {\n  background-color: #107f35;\n}\n.p1-green:active {\n  background-color: #1b783a;\n}\n\n.p1-lavander {\n  background-color: #d980fa;\n  color: #fff;\n}\n.p1-lavander:hover {\n  background-color: #ca63f0;\n}\n.p1-lavander:active {\n  background-color: #bc4be5;\n}\n\n.p1-berry {\n  background-color: #b53471;\n  color: #fff;\n}\n.p1-berry .p1-spinner .p1-spinner-svg path {\n  stroke: #888;\n}\n.p1-berry .p1-spinner .p1-spinner-svg .p1-spinner-stroke {\n  stroke: #fff;\n}\n.p1-berry:hover {\n  background-color: #b12466;\n}\n.p1-berry:active {\n  background-color: #a81a5c;\n}");

___$insertStyle("@keyframes p1-spinner-animation {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n  }\n}\n.p1-spinner {\n  margin: 0;\n  position: absolute;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  justify-content: center;\n  overflow: visible;\n  vertical-align: middle;\n}\n.p1-spinner .p1-spinner-svg {\n  margin: auto;\n  animation: p1-spinner-animation 0.5s linear infinite;\n}\n.p1-spinner .p1-spinner-svg path {\n  fill-opacity: 0;\n}\n.p1-spinner .p1-spinner-svg .p1-spinner-circle {\n  stroke: rgba(95, 107, 124, 0.2);\n}\n.p1-spinner .p1-spinner-svg .p1-spinner-stroke {\n  stroke: rgba(95, 107, 124, 0.8);\n  stroke-linecap: round;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-transition: stroke-dashoffset 0.2s cubic-bezier(0.4, 1, 0.75, 0.9);\n  transition: stroke-dashoffset 0.2s cubic-bezier(0.4, 1, 0.75, 0.9);\n}");

const Spinner = (props) => {
    return (jsxRuntime.jsx("div", { className: "p1-spinner", children: jsxRuntime.jsxs("svg", { ...props, className: `p1-spinner-svg${props.className ? ` ${props.className}` : ""}`, width: "20", height: "20", strokeWidth: "16.00", viewBox: "-3.00 -3.00 106.00 106.00", children: [jsxRuntime.jsx("path", { className: "p1-spinner-circle", d: "M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" }), jsxRuntime.jsx("path", { className: "p1-spinner-stroke", d: "M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90", pathLength: "280", strokeDasharray: "280 280", strokeDashoffset: "210" })] }) }));
};

function useDynamicClassname({ initialClassname, props, dynamicProps, }) {
    return React.useMemo(() => {
        const classNames = [];
        classNames.push(initialClassname);
        if (props.className)
            classNames.push(props.className);
        for (const propName of Object.keys(dynamicProps)) {
            if (props[propName] || props[propName] === 0) {
                const caller = useDynamicClassname.caller;
                const name = caller.displayName || caller.name;
                invariant__default["default"](dynamicProps[propName].includes(props[propName]), `Prop with name "${propName}" in component <${name}/> cannot be "${props[propName]}"`);
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
                    classNames.push(`p1-${props[propName]}`);
                }
            }
        }
        return classNames.join(" ");
    }, [initialClassname, props, dynamicProps]);
}

const AsyncButton = (props) => {
    const [_loading, _setLoading] = React__namespace.useState(props.loading);
    const { color, className, fill, loading, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-button",
        props: {
            loading,
            color,
            className,
            fill,
        },
        dynamicProps: {
            color: ["blue", "red", "green", "yellow", "pink", "purple", "lavander", "berry"],
            fill: [true, false],
        },
    });
    async function handleClick() {
        try {
            _setLoading(true);
            await props.onClick();
            _setLoading(false);
        }
        catch (error) {
            _setLoading(false);
        }
    }
    return (jsxRuntime.jsx("button", { ...rest, id: `p1-button${props.id ? ` ${props.id}` : ""}`, className: classNames, onClick: handleClick, children: _loading || loading ? jsxRuntime.jsx(Spinner, {}) : props.children }));
};

const Button = (props) => {
    const { color, className, fill, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-button",
        props: {
            color,
            className,
            fill,
        },
        dynamicProps: {
            color: ["blue", "red", "green", "yellow", "pink", "purple", "lavander", "berry"],
            fill: [true, false],
        },
    });
    return jsxRuntime.jsx("button", { ...rest, className: classNames });
};

___$insertStyle(".not-async-button {\n  width: 100%;\n}");

const NotAsyncButton = () => {
    const [state, setState] = React__namespace.useState("goodbye");
    return (jsxRuntime.jsx("div", { className: "not-async-button", children: jsxRuntime.jsx("h2", { children: state }) }));
};

___$insertStyle(".p1-row {\n  display: flex;\n}\n.p1-row .fluid {\n  width: 100%;\n}");

const Row = (props) => {
    const classNames = React__namespace.useMemo(() => {
        if (props.fluid) {
            return `p1-row fluid${props.className ? ` ${props.className} ` : ""} `;
        }
        return `p1-row${props.className ? ` ${props.className}` : ""}`;
    }, [props.className, props.fluid]);
    return jsxRuntime.jsx("div", { ...props, className: classNames });
};

___$insertStyle(".p1-col {\n  display: flex;\n  flex-direction: column;\n}\n.p1-col .fluid {\n  width: 100%;\n}");

const Column = (props) => {
    const classNames = React__namespace.useMemo(() => {
        if (props.fluid) {
            return `p1-col fluid${props.className ? ` ${props.className} ` : ""} `;
        }
        return `p1-col${props.className ? ` ${props.className}` : ""}`;
    }, [props.className, props.fluid]);
    return jsxRuntime.jsx("div", { ...props, className: classNames });
};

___$insertStyle(".p1-card {\n  padding: 18px;\n  background: #fafafa;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  border-radius: 0.35rem;\n}\n.p1-card.p1-padding-0 {\n  padding: 0px;\n}\n.p1-card.p1-padding-1 {\n  padding: 18px;\n}\n.p1-card.p1-padding-2 {\n  padding: 36px;\n}\n.p1-card.p1-padding-3 {\n  padding: 54px;\n}\n.p1-card.p1-padding-4 {\n  padding: 72px;\n}\n.p1-card.p1-elevation-0 {\n  box-shadow: none;\n}\n.p1-card.p1-elevation-1 {\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n.p1-card.p1-elevation-2 {\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n.p1-card.p1-elevation-3 {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n.p1-card.p1-elevation-4 {\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n}\n.p1-card.p1-radius-0 {\n  border-radius: 0;\n}\n.p1-card.p1-radius-1 {\n  border-radius: 0.35rem;\n}\n.p1-card.p1-radius-2 {\n  border-radius: 0.5rem;\n}\n.p1-card.p1-radius-3 {\n  border-radius: 0.75rem;\n}\n.p1-card.p1-radius-4 {\n  border-radius: 1rem;\n}\n.p1-card.p1-dark {\n  background: #3d3d3d;\n  color: #fafafa;\n}");

const Card = (props) => {
    const { radius, className, elevation, variant, padding, color, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-card",
        props: {
            className,
            radius,
            elevation,
            variant,
            color,
            padding,
        },
        dynamicProps: {
            radius: [0, 1, 2, 3, 4],
            variant: ["light", "dark"],
            elevation: [0, 1, 2, 3, 4],
            padding: [0, 1, 2, 3, 4],
        },
    });
    return jsxRuntime.jsx("div", { ...rest, className: classNames });
};

___$insertStyle(".p1-navbar {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1rem 2rem;\n  gap: 0.25rem;\n}\n.p1-navbar.p1-vertical {\n  padding: 2rem 2rem;\n  width: 20vw;\n  flex-direction: column;\n  gap: 1rem;\n}\n.p1-navbar.p1-vertical.p1-centered {\n  justify-content: center;\n}\n.p1-navbar.p1-vertical.p1-centered .p1-navbar-collapse {\n  flex: unset;\n}\n.p1-navbar.p1-vertical .p1-navbar-collapse {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex-basis: unset;\n  text-align: left;\n}\n.p1-navbar.p1-vertical .p1-navbar-collapse.right {\n  align-items: flex-end;\n  justify-content: unset;\n}\n.p1-navbar.p1-vertical .p1-navbar-collapse.left {\n  align-items: flex-start;\n  justify-content: unset;\n}\n.p1-navbar.p1-horizontal {\n  flex-direction: row;\n}\n@media (min-width: 768px) {\n  .p1-navbar {\n    padding: 1rem 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .p1-navbar {\n    padding: 1rem 4rem;\n  }\n}\n@media (min-width: 1200px) {\n  .p1-navbar {\n    padding: 1rem 6rem;\n  }\n}");

___$insertStyle(".p1-navbar-heading {\n  font-size: 24px;\n}\n.p1-navbar-heading.small {\n  font-size: 16px;\n}\n.p1-navbar-heading.medium {\n  font-size: 24px;\n}\n.p1-navbar-heading.large {\n  font-size: 32px;\n}");

const NavbarHeading = (props) => {
    const classNames = React__namespace.useMemo(() => {
        const _classNames = ["p1-navbar-heading"];
        if (props.fontSize) {
            _classNames.push(props.fontSize);
        }
        if (props.className) {
            _classNames.push(props.className);
        }
        return _classNames.join(" ");
    }, [props.fontSize, props.className]);
    return (jsxRuntime.jsx("div", { ...props, className: classNames, children: props.children }));
};

___$insertStyle(".p1-navbar-link {\n  text-decoration: none;\n}");

const NavLink = (props) => {
    return (jsxRuntime.jsx("div", { ...props, className: `p1-navbar-link${props.className ? ` ${props.className}` : ""}` }));
};

___$insertStyle(".p1-navbar-collapse {\n  display: none;\n  width: 100%;\n  flex-basis: 100%;\n  gap: 12px;\n  flex-direction: column;\n}\n.p1-navbar-collapse.left {\n  justify-content: flex-start;\n}\n.p1-navbar-collapse.right {\n  justify-content: flex-end;\n}\n@media (max-width: 767.98px) {\n  .p1-navbar-collapse.navbar-collapse-show {\n    flex: 1;\n    display: flex;\n    flex-basis: 100%;\n    align-items: flex-start;\n    padding: 1rem 0;\n  }\n}\n@media (min-width: 768px) {\n  .p1-navbar-collapse {\n    flex-direction: row;\n    flex: 1;\n    display: flex;\n    align-items: center;\n  }\n}");

const NavbarCollapse = (props) => {
    const { position, className, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-navbar-collapse",
        props: {
            position,
            className,
        },
        dynamicProps: {
            position: ["left", "right"],
        },
    });
    return jsxRuntime.jsx("div", { ...rest, id: "p1-navbar-collapse", className: classNames });
};

___$insertStyle(".p1-navbar-toggler {\n  display: block;\n  margin-left: auto;\n  border: none;\n  font-weight: 900;\n  font-size: 24px;\n}\n@media (min-width: 768px) {\n  .p1-navbar-toggler {\n    display: none;\n  }\n}");

const NavbarToggler = (props) => {
    const [show, setShow] = React__namespace.useState(false);
    const handleClick = () => {
        setShow(!show);
        const navs = document.querySelectorAll(".p1-navbar-collapse");
        navs.forEach((nav) => nav.classList.toggle("navbar-collapse-show"));
    };
    return (jsxRuntime.jsx("button", { className: `p1-navbar-toggler ${props.className ? ` ${props.className}` : ""}`, type: "button", "data-toggle": "collapse", "data-target": "p1-navbar-collapse", onClick: handleClick, children: "\u2630" }));
};

/**
 *
 * @function Navbar
 *
 *  Navigation bar component - Bundled with NavbarCollapse, NavbarHeading, NavbarLink, and NavbarToggler -
 *  these components can be accessed by using <Navbar.Collapse/>, <Navbar.Toggler/>, etc.
 *
 * @param cenetered - Margin centered if true.
 *
 *  default: false
 *
 * @param variant - This changes the overal theme of the navbar.
 *
 *  Options: "dark" | "light"
 *
 *  Default: "light"
 *
 * @param direction - The direction of the navigation bar.
 *
 *  Options: "horizontal" | "vertical"
 *
 *  Default: "horizontal"
 *
 */
const Navbar = (props) => {
    const { centered, direction, variant, className, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-navbar",
        props: {
            variant,
            className,
            centered,
            direction,
        },
        dynamicProps: {
            /**
             *
             * Variant can be light or dark.
             *
             */
            variant: ["light", "dark"],
            /**
             *
             * Direction of horizontal bar - vertical meant to be used as a sidebar.
             *
             */
            direction: ["horizontal", "vertical"],
            centered: [true, false],
        },
    });
    return jsxRuntime.jsx("div", { ...rest, className: classNames });
};
var index = Object.assign(Navbar, {
    Heading: NavbarHeading,
    Collapse: NavbarCollapse,
    Link: NavLink,
    Toggler: NavbarToggler,
});

___$insertStyle("@charset \"UTF-8\";\n/* Hide the input */\ninput[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n\n.check-trail {\n  display: flex;\n  align-items: center;\n  width: 45px;\n  height: 25px;\n  background: #2c3e50;\n  border-radius: 2.5em;\n  transition: all 0.5s ease;\n  cursor: pointer;\n}\n\n.check-handler {\n  display: flex;\n  margin-left: 0.2em;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  background: #34495e;\n  border-radius: 50%;\n  transition: all 0.5s ease;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n}\n.check-handler:before {\n  content: \"×\";\n  color: white;\n  font-size: 1em;\n  font-weight: bold;\n}\n\ninput[type=checkbox]:checked + .check-trail {\n  background: #16a085;\n}\ninput[type=checkbox]:checked + .check-trail .check-handler {\n  margin-left: 50%;\n  background: #1abc9c;\n}\ninput[type=checkbox]:checked + .check-trail .check-handler::before {\n  content: \"✔\";\n}\n\n/**\n *\n *\n *  Switch B begins here\n *\n *\n */\n.switch-b {\n  --line: #505162;\n  --dot: #f7f8ff;\n  --circle: #9ea0be;\n  --duration: 0.3s;\n  --text: #9ea0be;\n  cursor: pointer;\n}\n.switch-b input {\n  display: none;\n}\n.switch-b input + div {\n  position: relative;\n}\n.switch-b input + div:before, .switch-b input + div:after {\n  --s: 1;\n  content: \"\";\n  position: absolute;\n  height: 4px;\n  top: 10px;\n  width: 24px;\n  background: var(--line);\n  transform: scaleX(var(--s));\n  transition: transform var(--duration) ease;\n}\n.switch-b input + div:before {\n  --s: 0;\n  left: 0;\n  transform-origin: 0 50%;\n  border-radius: 2px 0 0 2px;\n}\n.switch-b input + div:after {\n  left: 28px;\n  transform-origin: 100% 50%;\n  border-radius: 0 2px 2px 0;\n}\n.switch-b input + div span {\n  padding-left: 56px;\n  line-height: 24px;\n  color: var(--text);\n}\n.switch-b input + div span:before {\n  --x: 0;\n  --b: var(--circle);\n  --s: 4px;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 var(--s) var(--b);\n  transform: translateX(var(--x));\n  transition: box-shadow var(--duration) ease, transform var(--duration) ease;\n}\n.switch-b input + div span:not(:empty) {\n  padding-left: 64px;\n}\n.switch-b input:checked + div:before {\n  --s: 1;\n}\n.switch-b input:checked + div:after {\n  --s: 0;\n}\n.switch-b input:checked + div span:before {\n  --x: 28px;\n  --s: 12px;\n  --b: var(--dot);\n}\n\n/**\n *\n * Switch-C begins here\n *\n */\n.switch-c input {\n  position: absolute;\n  opacity: 0;\n}\n\n/**\n   * 1. Adjust this to size\n   */\n.switch-c {\n  display: inline-block;\n  font-size: 20px; /* 1 */\n  height: 1em;\n  width: 2em;\n  background: #bdb9a6;\n  border-radius: 1em;\n}\n\n.switch-c div {\n  height: 1em;\n  width: 1em;\n  border-radius: 1em;\n  background: #fff;\n  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);\n  -webkit-transition: all 300ms;\n  -moz-transition: all 300ms;\n  transition: all 300ms;\n}\n\n.switch-c input:checked + div {\n  -webkit-transform: translate3d(100%, 0, 0);\n  -moz-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n}");

const Switch = (props) => {
    const { variant, ...rest } = props;
    if (variant === "c") {
        return jsxRuntime.jsx(SwitchC, { ...rest });
    }
    if (variant === "b") {
        return jsxRuntime.jsx(SwitchB, { ...rest });
    }
    return jsxRuntime.jsx(SwitchA, { ...rest });
};
const SwitchA = (props) => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("input", { id: "chck", className: "switch-a", type: "checkbox", ...props }), jsxRuntime.jsx("label", { htmlFor: "chck", className: "check-trail", children: jsxRuntime.jsx("span", { className: "check-handler" }) })] }));
const SwitchB = (props) => (jsxRuntime.jsxs("label", { className: "switch-b", children: [jsxRuntime.jsx("input", { type: "checkbox", ...props }), jsxRuntime.jsx("div", { children: jsxRuntime.jsx("span", {}) })] }));
const SwitchC = (props) => (jsxRuntime.jsx("div", { className: "switch-c-container", children: jsxRuntime.jsxs("label", { className: "switch-c", children: [jsxRuntime.jsx("input", { type: "checkbox", ...props }), " ", jsxRuntime.jsx("div", {})] }) }));

___$insertStyle("/**\n *\n * Ease-In Functions\n *\n */\n/**\n*\n* Ease-Out Functions\n*\n*/\n.p1-toast-provider {\n  z-index: 20;\n}\n.p1-toast-provider .p1-toast {\n  display: flex;\n  z-index: 20;\n  justify-content: center;\n  align-self: center;\n  align-items: center;\n  padding: 1rem 2rem;\n  text-align: center;\n  top: 0px;\n  transform: translateY(3vh);\n  border-radius: 0.35rem;\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  transition: all 400ms;\n  animation: toast 350ms cubic-bezier(0.12, 0, 0.39, 0) 0s 1 normal;\n}\n\n.p1-fade {\n  opacity: 0;\n  animation: fade 500ms cubic-bezier(0.11, 0, 0.5, 0) 0s 1 normal !important;\n}\n\n@keyframes toast {\n  0% {\n    transform: translateY(-27vh) rotate(26deg);\n  }\n  10% {\n    transform: translateY(-24vh) rotate(26deg);\n  }\n  90% {\n    transform: translateY(0vh) rotate(26deg);\n  }\n  100% {\n    transform: translateY(3vh) rotate(0deg);\n  }\n}\n@keyframes fade {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}");

var ToasterActions$1;
(function (ToasterActions) {
    ToasterActions["CREATE_TOAST"] = "CREATE_TOAST";
    ToasterActions["REMOVE_TOAST"] = "REMOVE_TOAST";
    ToasterActions["REMOVE_TOAST_AT_INDEX"] = "REMOVE_TOAST_AT_INDEX";
    ToasterActions["CLEAN_TOASTER"] = "CLEAN_TOASTER";
})(ToasterActions$1 || (ToasterActions$1 = {}));
const ToastReducer = (state, action) => {
    switch (action.type) {
        case ToasterActions$1.CREATE_TOAST:
            return {
                ...state,
                toasts: [...state.toasts, action.payload],
            };
        case ToasterActions$1.REMOVE_TOAST:
            return {
                ...state,
                toasts: state.toasts.slice(0, state.toasts.length - 1),
            };
        case ToasterActions$1.REMOVE_TOAST_AT_INDEX:
            return {
                ...state,
                toasts: [
                    ...state.toasts.slice(0, action.payload - 1),
                    ...state.toasts.slice(action.payload, state.toasts.length),
                ],
            };
        case ToasterActions$1.CLEAN_TOASTER:
            return {
                ...state,
                toasts: [],
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

const initial = {
    toasts: [],
};
const ToastContext = React__namespace.createContext([
    initial,
    () => {
        /*
         */
    },
]);
const ToastProvider = ({ children }) => {
    const [state, dispatch] = React__namespace.useReducer(ToastReducer, initial);
    return jsxRuntime.jsx(ToastContext.Provider, { value: [state, dispatch], children: children });
};

var ToasterActions;
(function (ToasterActions) {
    ToasterActions["CREATE_TOAST"] = "CREATE_TOAST";
    ToasterActions["REMOVE_TOAST"] = "REMOVE_TOAST";
    ToasterActions["REMOVE_TOAST_AT_INDEX"] = "REMOVE_TOAST_AT_INDEX";
    ToasterActions["CLEAN_TOASTER"] = "CLEAN_TOASTER";
})(ToasterActions || (ToasterActions = {}));
function useToaster() {
    const [state, dispatch] = React.useContext(ToastContext);
    const { toasts } = state;
    function createToast(message, type = "default") {
        const toastKey = Math.floor(Math.random() * (999999999999 - 1) + 1).toString();
        dispatch({
            type: ToasterActions.CREATE_TOAST,
            payload: {
                message,
                toastKey,
                type,
            },
        });
    }
    function removeToast(toastKey) {
        dispatch({
            type: ToasterActions.REMOVE_TOAST,
            payload: toastKey,
        });
    }
    function removeToastAtIndex(index) {
        dispatch({
            type: ToasterActions.REMOVE_TOAST_AT_INDEX,
            payload: index,
        });
    }
    function cleanToaster() {
        dispatch({
            type: ToasterActions.CLEAN_TOASTER,
            payload: null,
        });
    }
    return {
        toasts,
        createToast,
        removeToast,
        removeToastAtIndex,
        cleanToaster,
    };
}

const Toast = (props) => {
    const { removeToast } = useToaster();
    const { expiresAfter = 5000, fadesAfter = 4500, ...rest } = props;
    /**
     *
     * Random key generation - This is used to target animations to specific toasts and also for removing specific toasts.
     *
     */
    const key = React__namespace.useMemo(() => {
        return Math.floor(Math.random() * (99999999999 - 1) + 1);
    }, []);
    React__namespace.useEffect(() => {
        const element = document.querySelector(`.toast-key${key}`);
        setTimeout(function () {
            element.classList.add("p1-fade");
            setTimeout(() => {
                removeToast(key.toString());
            }, expiresAfter - fadesAfter);
        }, expiresAfter);
    }, [key, removeToast, expiresAfter, fadesAfter]);
    return (jsxRuntime.jsx("div", { ...rest, className: `p1-toast${props.className ? ` ${props.className}` : ""} toast-key${key}`, children: props.children }));
};

___$insertStyle(".p1-toast-provider {\n  position: fixed;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 0.5rem;\n  align-items: center;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}");

const Toaster = (props) => {
    const { toasts } = useToaster();
    return (jsxRuntime.jsx("div", { className: "p1-toast-provider", children: toasts &&
            toasts.map((toast) => {
                return jsxRuntime.jsx(Toast, { children: toast.message }, toast.toastKey);
            }) }));
};

exports.AsyncButton = AsyncButton;
exports.Button = Button;
exports.Card = Card;
exports.Column = Column;
exports.NavCollapse = NavbarCollapse;
exports.NavLink = NavLink;
exports.NavToggler = NavbarToggler;
exports.Navbar = index;
exports.NavbarHeading = NavbarHeading;
exports.NotAsyncButton = NotAsyncButton;
exports.Row = Row;
exports.Spinner = Spinner;
exports.Switch = Switch;
exports.Toast = Toast;
exports.ToastProvider = ToastProvider;
exports.Toaster = Toaster;
exports.useToaster = useToaster;
//# sourceMappingURL=index.js.map

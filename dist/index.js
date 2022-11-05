

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

___$insertStyle(".p1-col {\n  display: flex;\n  flex-direction: column;\n}\n.p1-col.p1-gap-1 {\n  gap: 0.5rem;\n}\n.p1-col.p1-gap-2 {\n  gap: 1rem;\n}\n.p1-col.p1-gap-3 {\n  gap: 1.5rem;\n}\n.p1-col.p1-gap-4 {\n  gap: 2rem;\n}\n.p1-col.p1-gap-0 {\n  gap: 0;\n}\n.p1-col .fluid {\n  width: 100%;\n}");

const Column = (props) => {
    const { className, radius, gap, variant, padding, ...rest } = props;
    const classNames = useDynamicClassname({
        initialClassname: "p1-col",
        props: {
            className,
            radius,
            gap,
            variant,
            padding,
        },
        dynamicProps: {
            radius: [0, 1, 2, 3, 4],
            variant: ["light", "dark"],
            padding: [0, 1, 2, 3, 4],
            gap: [0, 1, 2, 3, 4],
        },
    });
    return jsxRuntime.jsx("div", { ...rest, className: classNames });
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

___$insertStyle(".p1-navbar {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1rem 2rem;\n  gap: 0.25rem;\n  box-sizing: border-box;\n}\n.p1-navbar.p1-vertical {\n  padding: 2rem 2rem;\n  width: 20vw;\n  flex-direction: column;\n  gap: 1rem;\n}\n.p1-navbar.p1-vertical.p1-centered {\n  justify-content: center;\n}\n.p1-navbar.p1-vertical.p1-centered .p1-navbar-collapse {\n  flex: unset;\n}\n.p1-navbar.p1-vertical .p1-navbar-collapse {\n  display: flex;\n  height: auto;\n  flex-direction: column;\n  gap: 1rem;\n  flex-basis: unset;\n  text-align: left;\n}\n.p1-navbar.p1-vertical .p1-navbar-collapse.p1-right {\n  align-items: flex-end;\n  justify-content: unset;\n}\n.p1-navbar.p1-vertical .p1-navbar-collapse.p1-left {\n  align-items: flex-start;\n  justify-content: unset;\n}\n.p1-navbar .p1-navbar-collapse.p1-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n.p1-navbar .p1-navbar-collapse.p1-left {\n  align-items: center;\n  justify-content: flex-end;\n}\n.p1-navbar.p1-horizontal {\n  flex-direction: row;\n}\n@media (min-width: 768px) {\n  .p1-navbar {\n    padding: 1rem 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .p1-navbar {\n    padding: 1rem 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .p1-navbar {\n    padding: 1rem 3rem;\n  }\n}");

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

___$insertStyle(".p1-navbar-link {\n  display: flex;\n  text-decoration: none;\n}\n.p1-navbar-link a {\n  text-decoration: none;\n}");

const NavLink = (props) => {
    return (jsxRuntime.jsx("div", { ...props, className: `p1-navbar-link${props.className ? ` ${props.className}` : ""}` }));
};

___$insertStyle(".p1-navbar-collapse {\n  display: flex;\n  height: auto;\n  width: 100%;\n  flex-basis: 100%;\n  gap: 12px;\n  flex-direction: column;\n  flex: 1;\n  flex-basis: 100%;\n}\n.p1-navbar-collapse.left {\n  justify-content: flex-start;\n}\n.p1-navbar-collapse.right {\n  justify-content: flex-end;\n}\n@media (max-width: 767.98px) {\n  .p1-navbar-collapse {\n    display: flex;\n    width: 100vw;\n    min-width: 100vw;\n    flex: 1;\n    flex-basis: 100%;\n  }\n}\n@media (max-width: 767.98px) {\n  .p1-navbar-collapse.navbar-collapse-show {\n    display: flex;\n    width: 100vw;\n    min-width: 100vw;\n    flex: 1;\n    flex-basis: 100%;\n    align-items: flex-start;\n    padding: 1rem 0;\n    height: auto;\n  }\n}\n@media (max-width: 767.98px) {\n  .p1-navbar-collapse.navbar-collapse-hide {\n    overflow: hidden;\n    flex: 1;\n    flex-basis: 100%;\n    width: 100vw;\n    min-width: 100vw;\n    height: 0px;\n  }\n}\n@media (min-width: 768px) {\n  .p1-navbar-collapse {\n    flex-direction: row;\n    flex: 1;\n    display: flex !important;\n    height: 100% !important;\n    align-items: center;\n  }\n}");

var EnumerableNavbarActions$1;
(function (EnumerableNavbarActions) {
    EnumerableNavbarActions["SET_COLLAPSER"] = "SET_COLLAPSER";
    EnumerableNavbarActions["SET_TOGGLER"] = "SET_TOGGLER";
    EnumerableNavbarActions["SET_COLLAPSER_HEIGHT"] = "SET_COLLAPSER_HEIGHT";
})(EnumerableNavbarActions$1 || (EnumerableNavbarActions$1 = {}));
const NavbarReducer = (state, action) => {
    switch (action.type) {
        case EnumerableNavbarActions$1.SET_COLLAPSER:
            return {
                ...state,
                collapser: action.payload,
            };
        case EnumerableNavbarActions$1.SET_TOGGLER:
            return {
                ...state,
                toggler: action.payload,
            };
        case EnumerableNavbarActions$1.SET_COLLAPSER_HEIGHT:
            return {
                ...state,
                collapserHeight: action.payload,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

const initial$1 = {
    collapser: null,
    toggler: null,
    collapserHeight: 0,
};
const NavbarContext = React__namespace.createContext([
    initial$1,
    () => {
        //
    },
]);
const NavbarProvider = ({ children }) => {
    const [state, dispatch] = React__namespace.useReducer(NavbarReducer, initial$1);
    return jsxRuntime.jsx(NavbarContext.Provider, { value: [state, dispatch], children: children });
};

var EnumerableNavbarActions;
(function (EnumerableNavbarActions) {
    EnumerableNavbarActions["SET_COLLAPSER"] = "SET_COLLAPSER";
    EnumerableNavbarActions["SET_TOGGLER"] = "SET_TOGGLER";
    EnumerableNavbarActions["SET_COLLAPSER_HEIGHT"] = "SET_COLLAPSER_HEIGHT";
})(EnumerableNavbarActions || (EnumerableNavbarActions = {}));
const animationFrames = 30;
const animationLength = 300;
function useNavbarContext() {
    const [state, dispatch] = React.useContext(NavbarContext);
    const setToggler = React.useCallback((element) => {
        dispatch({
            type: EnumerableNavbarActions.SET_TOGGLER,
            payload: element,
        });
    }, [dispatch]);
    const setCollapser = React.useCallback((element) => {
        dispatch({
            type: EnumerableNavbarActions.SET_COLLAPSER,
            payload: element,
        });
    }, [dispatch]);
    const setCollapserHeight = React.useCallback((height) => {
        dispatch({
            type: EnumerableNavbarActions.SET_COLLAPSER_HEIGHT,
            payload: height,
        });
    }, [dispatch]);
    const collapseAnimation = React.useCallback(() => {
        const { collapser, collapserHeight } = state;
        /**
         * If height is zero, we expand
         */
        if (collapser.style.height === "0px") {
            /**
             *
             * Add flex before expanding.
             */
            collapser.style.display = "flex";
            /**
             * Create a loop which will iterate {frames} times.
             */
            Array(animationFrames)
                .fill(0)
                .forEach((item, i) => {
                /**
                 * Timeout is based on frame-rate
                 */
                setTimeout(() => {
                    collapser.style.height =
                        i === animationFrames - 1
                            ? `${collapserHeight}px`
                            : `${(collapserHeight / animationFrames) * i}px`;
                }, (animationLength / animationFrames) * i);
            });
        }
        else {
            Array(animationFrames)
                .fill(0)
                .forEach((item, i) => {
                setTimeout(() => {
                    if (i === animationFrames - 1) {
                        /**
                         * Force 0px on final iteration, this helps mitigate small discrepancies in rounding.
                         */
                        collapser.style.height = `0px`;
                        /**
                         * Display is set to none as the final action of the loop.
                         */
                        collapser.style.display = "none";
                    }
                    else {
                        collapser.style.height = `${collapserHeight - (collapserHeight / animationFrames) * i}px`;
                    }
                }, (animationLength / animationFrames) * i);
            });
        }
    }, [state]);
    return {
        ...state,
        setCollapser,
        setToggler,
        setCollapserHeight,
        collapseAnimation,
    };
}

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle$1(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}

var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle$1(node).getPropertyValue(hyphenateStyleName(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

const MARGINS = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
};
function getDefaultDimensionValue(dimension, elem) {
    const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
    const value = elem[offset];
    const margins = MARGINS[dimension];
    // @ts-ignore
    return value + parseInt(style(elem, margins[0]), 10) + parseInt(style(elem, margins[1]), 10);
}
const NavbarCollapse = (props) => {
    const { position, className, ...rest } = props;
    const { setCollapserHeight, setCollapser } = useNavbarContext();
    const ref = React__namespace.useRef();
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
    React__namespace.useEffect(() => {
        if (ref && ref.current) {
            setCollapser(ref.current);
        }
    }, [ref, setCollapser]);
    React__namespace.useEffect(() => {
        if (ref && ref.current) {
            setCollapserHeight(Math.ceil(getDefaultDimensionValue("height", ref.current)));
        }
    }, [ref, setCollapserHeight]);
    return jsxRuntime.jsx("div", { ...rest, ref: ref, id: "p1-navbar-collapse", className: classNames });
};
NavbarCollapse.displayName = "NavbarCollapse";

___$insertStyle(".p1-navbar-toggler {\n  display: block;\n  margin-left: auto;\n  border: none;\n  font-weight: 900;\n  font-size: 24px;\n}\n@media (min-width: 768px) {\n  .p1-navbar-toggler {\n    display: none;\n  }\n}");

const NavbarToggler = (props) => {
    const { setToggler, toggler, collapseAnimation } = useNavbarContext();
    const [show, setShow] = React__namespace.useState(false);
    const ref = React__namespace.useRef();
    const handleClick = () => {
        document.querySelectorAll(".p1-navbar-collapse");
        setShow(!show);
    };
    React__namespace.useEffect(() => {
        if (ref && ref.current) {
            setToggler(ref.current);
        }
    }, [ref, setToggler]);
    React__namespace.useEffect(() => {
        if (toggler) {
            toggler.addEventListener("click", collapseAnimation);
        }
    }, [toggler, collapseAnimation]);
    return (jsxRuntime.jsx("button", { ref: ref, className: `p1-navbar-toggler ${props.className ? ` ${props.className}` : ""}`, type: "button", "data-toggle": "collapse", "data-target": "p1-navbar-collapse", onClick: handleClick, children: "\u2630" }));
};
NavbarToggler.displayName = "NavbarToggler";

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
    return (jsxRuntime.jsx(NavbarProvider, { children: jsxRuntime.jsx("div", { ...rest, className: classNames }) }));
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
/**
 *
 * useToaster
 *
 * Exposes functionality of the toaster component, allowing for easy access to toast-making (yum) and also cleaning the toaster to
 * reduce mold and germs in your application.
 *
 */
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

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

___$insertStyle("#popper {\n  height: 30px;\n  width: 200px;\n  background: black;\n  color: white;\n}\n\n#p1-popover-arrow,\n#p1-popover-arrow::before {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: inherit;\n}\n\n#p1-popover-arrow {\n  visibility: hidden;\n}\n\n#p1-popover-arrow::before {\n  visibility: visible;\n  content: \"\";\n  transform: rotate(45deg);\n}\n\n#p1-tooltip[data-popper-placement^=top] > #p1-popover-arrow {\n  bottom: -4px;\n}\n\n#p1-tooltip[data-popper-placement^=bottom] > #p1-popover-arrow {\n  top: -4px;\n}\n\n#p1-tooltip[data-popper-placement^=left] > #p1-popover-arrow {\n  right: -4px;\n}\n\n#p1-tooltip[data-popper-placement^=right] > #p1-popover-arrow {\n  left: -3px;\n}");

const Popover = (props) => {
    const { element, placement = "auto", arrow = false, children, ...rest } = props;
    React__namespace.useEffect(() => {
        const popper = document.querySelector("#p1-tooltip");
        /**
         *
         * Typecheck that ReactNode is not a string for elementClass.
         *
         */
        if (!React__namespace.isValidElement(children)) {
            return null;
        }
        const elementClass = children.props.className;
        const arrow = document.querySelector("#p1-popover-arrow");
        const element = document.querySelector(`.${elementClass}`);
        createPopper(element, popper, {
            placement: placement ? placement : "auto",
            strategy: "absolute",
            modifiers: [
                {
                    name: "arrow",
                    options: {
                        element: arrow,
                        placement: "top",
                        padding: 12,
                    },
                },
                {
                    name: "offset",
                    options: {
                        offset: [0, 4],
                    },
                },
            ],
        });
    }, [children, placement]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [children, jsxRuntime.jsxs("div", { id: "p1-tooltip", className: "p1-tooltip", ...rest, children: [jsxRuntime.jsx(jsxRuntime.Fragment, { children: element }), jsxRuntime.jsx("div", { id: "p1-popover-arrow", "data-popper-arrow": true, style: { display: arrow ? "flex" : "none" } })] })] }));
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
exports.Popover = Popover;
exports.Row = Row;
exports.Spinner = Spinner;
exports.Switch = Switch;
exports.Toast = Toast;
exports.ToastProvider = ToastProvider;
exports.Toaster = Toaster;
exports.useToaster = useToaster;
//# sourceMappingURL=index.js.map

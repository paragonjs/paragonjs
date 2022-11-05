import * as React from "react";
import NavbarReducer from "./reducer";

const initial: NavbarState = {
    collapser: null,
    toggler: null,
    collapserHeight: 0,
};

export const NavbarContext = React.createContext<NavbarContextInterface>([
    initial,
    () => {
        //
    },
]);

interface ProviderProps {
    children: React.ReactNode;
}

const NavbarProvider = ({ children }: ProviderProps): JSX.Element => {
    const [state, dispatch]: NavbarContextInterface = React.useReducer(NavbarReducer, initial);

    return <NavbarContext.Provider value={[state, dispatch]}>{children}</NavbarContext.Provider>;
};

export default NavbarProvider;

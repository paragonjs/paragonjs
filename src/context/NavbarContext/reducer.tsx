import * as React from "react";

enum EnumerableNavbarActions {
    SET_COLLAPSER = "SET_COLLAPSER",
    SET_TOGGLER = "SET_TOGGLER",
    SET_COLLAPSER_HEIGHT = "SET_COLLAPSER_HEIGHT",
    SET_EXPANDED = "SET_EXPANDED",
}

const NavbarReducer: React.Reducer<NavbarState, NavbarActions> = (
    state: NavbarState,
    action: NavbarActions
) => {
    switch (action.type) {
        case EnumerableNavbarActions.SET_COLLAPSER:
            return {
                ...state,
                collapser: action.payload,
            };
        case EnumerableNavbarActions.SET_TOGGLER:
            return {
                ...state,
                toggler: action.payload,
            };
        case EnumerableNavbarActions.SET_COLLAPSER_HEIGHT:
            return {
                ...state,
                collapserHeight: action.payload,
            };
        case EnumerableNavbarActions.SET_EXPANDED:
            return {
                ...state,
                expanded: action.payload,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

export default NavbarReducer;

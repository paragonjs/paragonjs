import * as React from "react";
export declare const NavbarContext: React.Context<NavbarContextInterface>;
interface ProviderProps {
    children: React.ReactNode;
}
declare const NavbarProvider: ({ children }: ProviderProps) => JSX.Element;
export default NavbarProvider;

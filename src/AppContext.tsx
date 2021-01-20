import React from "react";
import { withRouter } from "react-router";

/**
 * We just need the reference to the AppContext.
 * Initialization is done via AppContext.Provider so, we skip setting value and state type here.
 */
export const AppContext = React.createContext({});

/**
 * Don't let other containers import this file.
 * !!!Use ContainerBase.ts instead!!!
 * @param component component to connect with store
 */
export function __connectWithStore<TProps>(component: React.ComponentType<TProps>): React.FunctionComponent {
    const hoc = (props: TProps) => {
        return (
            <AppContext.Consumer>
                {(bswpm) =>
                    React.createElement(component, {
                        ...props,
                        ...bswpm,
                    })
                }
            </AppContext.Consumer>
        );
    };

    return hoc;
}

export function __connect<TProps>(component: React.ComponentType<TProps>): React.ComponentClass<TProps> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return withRouter(__connectWithStore(component) as any) as any;
}

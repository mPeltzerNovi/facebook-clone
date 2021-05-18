import React, { createContext, useContext, useReducer} from "react";

export const StateContext = createContext();


//StateProvider gaat dan om de "App" heen
export const StateProvider = ({ reducer,
initialState, children  }) => (
    <StateContext.Provider value={useReducer
    (reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//hook
export const useStateValue = () =>
    useContext(StateContext);

import React, { createContext, useContext, useReducer } from "react";

//Prepares the dataLayer or creates the dataLayer
export const StateContext = createContext();

//Wraps our app and provides the data layer to each component inside our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull info from the dataLayer
export const useStateValue = () => useContext(StateContext);

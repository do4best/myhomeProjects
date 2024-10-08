import {createContext, useReducer} from "react";
import AppReducer from "./AppReducer.js";
const initialState={
   Transactions : [
  { id: 1, text: 'Flower', amount: -20 },
   { id: 2, text: 'Salary', amount: 300 },
   { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
],
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(<GlobalContext.Provider value={{
        Transactions: state.Transactions,
    }}>
        {children}
    </GlobalContext.Provider>)
}
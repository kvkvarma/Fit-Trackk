import { createContext,useState } from "react";
export const MacroContext = createContext();
export const MacroProvider = ({ children }) => {
    const [macros, setMacros] = useState({
        protein: 0,
        carbs: 0,
        fats: 0,
    });

    return (
        <MacroContext.Provider value={{ macros, setMacros }}>
            {children}
        </MacroContext.Provider>
    );
}
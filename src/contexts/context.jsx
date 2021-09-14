import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {

    const [theme, setTheme] = useState({
        align: 'left',
        font: 20
    });

    const IncreaseFont = () => {
        setTheme({
            ...theme,
            font: ++theme.font
        });
    }

    const DecreaseFont = (newFont) => {
        setTheme({
            ...theme,
            font: --theme.font
        });
    }

    const HandleAlignment = (alignment) => {
        setTheme({
            ...theme,
            align: alignment
        });
    }

    return (
        <Context.Provider value={{ theme, IncreaseFont, DecreaseFont, HandleAlignment }}>
            {children}
        </Context.Provider >
    );
}

export { ContextProvider, Context };
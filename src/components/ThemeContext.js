import React, {useState } from 'react'


export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
const [theme, setTheme] = useState("black");

return (
    <ThemeContext.Provider value={[theme, setTheme]}>
        {props.children}
    </ThemeContext.Provider>
)
}
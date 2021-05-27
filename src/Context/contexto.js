import React from "react"


const AppContext = React.createContext(
    {
        contador: 0,
        setContador: () => { }
    }
);

export default AppContext;


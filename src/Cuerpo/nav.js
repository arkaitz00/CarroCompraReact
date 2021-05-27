import React from "react";
import AppContext from '../Context/contexto'

export class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    updateContador(contador, updateContext) {
        contador = contador + 1;
        updateContext(contador)
    }

    render() {
        return (
            <>
                <AppContext.Consumer>
                    {({ contador, setContador }) => (
                        <h1 >
                            🛒: {contador === 0 ? 'Ningun producto' : contador === 1 ? contador + ' Producto' : contador + ' Productos'}
                        </h1>
                    )}
                </AppContext.Consumer>
            </>
        );
    }
}
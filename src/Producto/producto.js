import React from "react"
import Button from "react-bootstrap/Button"
import AppContext from '../Context/contexto'


export class Producto extends React.Component {
    constructor(props) {
        super(props);

    }

    aumentarCantidad(currentValue, setContext) {
        this.props.aumentarUnidad(this.props.producto.id)
        setContext(currentValue + 1)
    }

    reducirCantidad(currentValue, setContext) {
        if(currentValue > 0){
            this.props.aumentarUnidad(this.props.producto.id)
            setContext(currentValue - 1)
        }
    }

    render() {
        return (

            <AppContext.Consumer>
                {({ contador, setContador }) => (
                    <>
                        <Button disabled>{this.props.producto.value}</Button>{' '}
                        <Button onClick={() => this.aumentarCantidad(contador, setContador)}>+</Button>{' '}
                        <Button onClick={() => this.reducirCantidad(contador, setContador)}>-</Button>{' '}
                        <Button onClick="">🗑️</Button>
                    </>
                )}

            </AppContext.Consumer>


        );
    }
}
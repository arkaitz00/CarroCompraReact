import React from "react";
import { Producto } from "../Producto/producto";

export class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0 }
            ]
        }
        this.aumentarUnidad = this.aumentarUnidad.bind(this);
        this.reducirUnidad = this.reducirUnidad.bind(this);
    }



    aumentarUnidad(id) {
        let index = this.state.productos.findIndex(producto => producto.id == id)
        let value = this.state.productos[index].value + 1
        console.log(index, value);
        this.setState(() => (
            this.state.productos[index].value = value
        ))
        this.updateContext()
    }

    reducirUnidad(id) {
        let index = this.state.productos.findIndex(producto => producto.id == id)
        let value = this.state.productos[index].value - 1
        console.log(index, value);
        this.setState(() => (
            this.state.productos[index].value = value
        ))
            this.updateContext()
    }

    updateContext() {

    }

    render() {

        return (
            this.state.productos.map(producto => (
                <>
                    <Producto
                        contadorUnidades={this.state.productos.value}
                        producto={producto}
                        aumentarUnidad={this.aumentarUnidad}
                        reducirUnidad={this.reducirUnidad}
                    />
                    <br /><br />
                </>
            )

            )

        )
    }
}
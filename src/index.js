import ReactDOM from "react-dom";
import React from "react";
import AppContext from './Context/contexto'
import { Nav } from "./Cuerpo/nav";
import { Body } from "./Cuerpo/body";
import Button from "react-bootstrap/Button"

export class Index extends React.Component {
    setContador = contador => {
        this.setState({ contador })
    }

    state = {
        contador: 0,
        setContador: this.setContador,
    }

    constructor(props) {
        super(props);
        this.recargarContador = this.recargarContador.bind(this)
    }

    recargarPagina = () => {
        window.location.reload();
    }

    recargarContador() {
       // this.setContador(0)
    }


    render() {
        return (
            <>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
                <AppContext.Provider value={this.state}>
                    <Nav />
                    <br /><br />
                    <Button onclick={this.recargarContador}>🔙</Button>{' '}
                    <Button onclick={this.recargarPagina}>♻️</Button>
                    <br /> <br />
                    <Body />
                </AppContext.Provider>
            </>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById("root"));
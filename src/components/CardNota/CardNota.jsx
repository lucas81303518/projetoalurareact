import React, { Component } from 'react';
import "./Style.css"

class CardNota extends React.Component {
    render() { 
        
        return <div>
    <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto"> {this.props.texto}</p>
    </section>
        </div>;
    }
}
 
export default CardNota;
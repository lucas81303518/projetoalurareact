import React, {Component} from 'react';
import CardNota from '../CardNota/CardNota';
import "./Style.css";

class ListaDeNotas extends Component{
    render(){
        return(
// Tag <ul> Significa uma Lista de itens
//Tag <li> Significa um item dentro dessa lista
<ul className="lista-notas">
{this.props.notas.map((nota, index) => {
  return (
    <li className="lista-notas_item" key={index}>
      <CardNota titulo={nota.titulo} texto = {nota.texto}/>
    </li>
  );
})}
</ul>
        )
    }
}
export default ListaDeNotas;

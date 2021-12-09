import React from 'react';
import styled from 'styled-components';



let ContainerFiltro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3%;
  margin-right: 10px;
`
let ContainerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

class App extends React.Component {
  render(){
    return (
      <div>
        <ContainerFiltro>
          <span>Quantidade de produtos: {this.props.tamanhoLista}</span>
          <div>
            <span>Ordenação</span>
            <select value={this.props.valueSelect} onChange={this.props.handlerSelect}>
              <option value={"crescente"}>Crescente</option>
              <option value={"decrescente"}>Decrescente</option>
            </select>
          </div>
        </ContainerFiltro>
        <ContainerCard>
          {this.props.nome}
        </ContainerCard>
      </div>
    );
  }
}

export default App;

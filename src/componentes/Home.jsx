import React from 'react';
import styled from 'styled-components';

let ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3%;
`


class App extends React.Component {
    render(){
    return (
      <ContainerHome>
        <span>Quantidade de produtos: </span>
        <div>
            <span>Ordenação</span>
            <select>
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
        </div>
      </ContainerHome>
    );
  }
}

export default App;

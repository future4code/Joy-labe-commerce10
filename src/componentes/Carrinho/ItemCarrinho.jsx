import React from 'react'
import styled from 'styled-components';



let ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  }
`


export class App extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.itemCarrinho.quantidade}x</p>
      <p>{this.props.itemCarrinho.nome}</p>
      <button 
        onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
      >
        Remover
      </button>
    </ItemContainer>
  }
}

export default App;


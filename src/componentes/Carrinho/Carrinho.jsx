import React from 'react'
import { ItemCarrinho } from './ItemCarrinho'
import styled from 'styled-components';



let ContainerCarrinho = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

let ContainerListaCarrinho = styled.div`
  display: grid;
  gap: 8px;
`

export class App extends React.Component {
  getTotalValue = () => {
    let totalValue = 0

    for(let produto of this.props.carrinhoDeProdutos) {
      totalValue += produto.preco * produto.quantidade
    }

    return totalValue
  }

  render() {
    return <ContainerCarrinho>
      <h3>Carrinho:</h3>
      <ContainerListaCarrinho>
        {this.props.carrinhoDeProdutos.map((produto) => {
          return <ItemCarrinho 
                    itemCarrinho={produto} 
                    onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                  />
        })}
      </ContainerListaCarrinho>
      <p>Valor total: R${this.getTotalValue()},00</p>
    </ContainerCarrinho>
  }
}
export default App;

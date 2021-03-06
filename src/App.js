import React from 'react';
import styled from 'styled-components';
import './App.css';
import Home from "./componentes/Home"
import Carrinho from "./componentes/Carrinho/Carrinho"
import Filtro from "./componentes/Filtro"

let Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 200px;
  height: 300px;
  border: #282c34;
  border-style: groove;
  border-width: 1px;
  margin-top: 20px;
`


class App extends React.Component {
  state = {
    cardRenderizado: [
      {
        id: Date.now,
        nome: "camisa 1",
        preco: 10,
        imgUrl: "https://picsum.photos/200/200",
      },
      {
        id: Date.now,
        nome: "camiseta 2",
        preco: 100,
        imgUrl: "https://picsum.photos/200/200",
      },
      {
        id: Date.now,
        nome: "camiseta 3",
        preco: 1000,
        imgUrl: "https://picsum.photos/200/200",
      },
      {
        id: Date.now,
        nome: "camisa 4",
        preco: 20,
        imgUrl: "https://picsum.photos/200/200",
      },
      {
        id: Date.now,
        nome: "camisa 5",
        preco: 200,
        imgUrl: "https://picsum.photos/200/200",
      }
    ],

    select:""
  }
  
  handlerSelect = (e) => {
    this.setState({select: e.target.value})
  }
  
  
  render(){
  // montando os cards e depois jogando para a home via PROPS
    const lista = this.state.cardRenderizado
    const nome = lista.map(i => <Card><img src={i.imgUrl} alt="foto camisa"/><div><p>{i.nome}</p><p>{i.preco}</p><button>carrinho</button></div></Card>)
    let valueSelect = this.state.select
    
   if (this.state.select === 'crescente'){
     const listaCrescente = [...lista] 
      listaCrescente.sort((a,b) => {
        let teste = a.preco - b.preco
        this.setState({cardRenderizado: teste})
      })
   }else if(this.state.select === 'decrescente'){
    const listaDescrescente = [...lista] 
    listaDescrescente.sort((a,b) => {
      let teste = b.preco - a.preco
      this.setState({cardRenderizado: teste})
    })
   }

    return (
      <div className="App">
        <Filtro/>
        <Home
        nome={nome}
        tamanhoLista={lista.length}
        valueSelect={valueSelect}
        handlerSelect={this.handlerSelect}
        />
        <Carrinho/>
      </div>
    );
  }
}

export default App;

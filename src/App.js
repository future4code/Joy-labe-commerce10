import React from 'react';
import './App.css';
import Home from "./componentes/Home"
import Carrinho from "./componentes/Carrinho/Carrinho"
import Filtro from "./componentes/Filtro"

class App extends React.Component {
  state = {
    card: [
      {
        // id: 
        // nome:
        // valor:
        // imagen:
      }
    ]
  }
  render(){
    

    return (
      <div className="App">
        <Filtro/>
        <Home/>
        <Carrinho/>
      </div>
    );
  }
}

export default App;

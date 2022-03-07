import React, {Component} from 'react'
import "./App.css"
class app extends Component{
  


  state = {
    
    pessoas: [
    {
    nome: "Lucas",
    fruta: "manga"
  },{
    nome: "Hernando",
    fruta: "abacaxi"
  },{
    nome: "miguel",
    fruta: "maçã"
  }

  ]
  }
  ola = () => {
    return <h2>Olá {this.state.nome} :)</h2>
  }
  
  render(){
    return(
      <div>
        <div className = "h1">
          <h1>Bom Dia :)</h1>
        </div>
        
        
        {this.state.pessoas.map((item) => (
          <div className="container">
            <p>{item.nome}</p>
            <p>{item.fruta}</p>
          </div>
        )) }
      </div>
    )
  }
} 

export default app;

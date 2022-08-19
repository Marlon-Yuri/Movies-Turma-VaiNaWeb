import React, { Component } from 'react'

export default class Shows extends Component {

    state = {
        instrumentos: [
            'flauta',
            'piano',
            'violão',
            'contrabaixo',
            'viola', 
            'cello',
            'violino',
            'teclado'
        ],
        instrumentoFiltrado : []
    }

    handleInstruments = (event) =>{
        const listaFiltrada = this.state.instrumentos.filter(item =>{
            if(item.includes(event.target.value)){
                return true
            }
        })

        this.setState({instrumentoFiltrado: listaFiltrada})
    }

  render() {
    return (
      <div>
        <input  onChange={this.handleInstruments}/>
        <ul>{this.state.instrumentoFiltrado.map(item =>(
            <h2>{item}</h2>
        ))}</ul>
      </div>
    )
  }
}

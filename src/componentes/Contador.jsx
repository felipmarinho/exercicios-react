import React, { Component } from 'react'

export default class Contador extends Component {

	maisUm = () => {
		// this.props.numero++;
		console.log(this);
	}

	render() {
		return (
			<div>
				<div>Número: {this.props.numero}</div>
				<button onClick={this.maisUm}>Inc</button>
				<button>Dec</button>
			</div>
		)
	}
}

// Temos um problema aqui pois o this na função maisUm() está fazendo referencia
// ao contexto da função e não da classe.

// Solução 1 - Bind
/**
	constructor(props) {
		super(props)
		this.maisUm = this.maisUm.bind(this)
	}
 */

// Solução 2 - Função Arrow (onClick)
//  <button onClick={() => this.maisUm()}>Inc</button>

// Solução 3 - Função Arrow
/**
	maisUm = () => {
		console.log(this);
	}
 */
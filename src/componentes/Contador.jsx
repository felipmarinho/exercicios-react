import React, { Component } from 'react'

export default class Contador extends Component {

	state = {
		numero: this.props.numeroInicial
	}

	maisUm = () => {
		// this.state.numero = this.state.numero + 1; // Não funciona
		// this.setState({ numero: this.state.numero + 1});
		this.alterarNumero(1)
	}
	
	menosUm = () => {
		// this.setState({ numero: this.state.numero - 1});
		this.alterarNumero(-1)
	}
	
	alterarNumero = (diferenca) => {
		this.setState({ numero: this.state.numero + diferenca});
	}

	render() {
		return (
			<div>
				<div>Número: {this.state.numero}</div>
				<button onClick={this.maisUm}>Inc</button>
				<button onClick={this.menosUm}>Dec</button>
				<button onClick={() => this.alterarNumero(10)}>Inc 10</button>
				<button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
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
import React, { Component } from 'react'

export default class Contador extends Component {
	maisUm() {
		this.props.numero++;
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

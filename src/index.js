import React from 'react';
import ReactDOM from 'react-dom';
import Familia from './componentes/Familia';
import Membro from './componentes/Membro';

const  elemento = document.getElementById('root');
ReactDOM.render(
	<div>
		<Familia sobrenome='Lima Marinho'>
			<Membro nome='Felipe' sobrenome='Marinho' />
			<Membro nome='Viviane' sobrenome='Lima' />
		</Familia>
	</div>
	, elemento);
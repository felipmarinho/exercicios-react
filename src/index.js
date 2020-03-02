import React from 'react';
import ReactDOM from 'react-dom';
import { CompA, CompB } from './componentes/DoisComponentes';

const  elemento = document.getElementById('root');
ReactDOM.render(
	<div>
		<CompA valor="Olá eu sou A"/>
		<CompB valor="B na área"/>
	</div>
	, elemento);
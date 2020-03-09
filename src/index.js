import React from 'react';
import ReactDOM from 'react-dom';
import Contador from './componentes/Contador';

const  elemento = document.getElementById('root');
ReactDOM.render(
	<div>
		<Contador numero={0}/>
	</div>
	, elemento);
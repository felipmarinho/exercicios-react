import React from 'react';
import ReactDOM from 'react-dom';
import ComponenteClasses from './componentes/ComponenteClasses';

const  elemento = document.getElementById('root');
ReactDOM.render(
	<div>
		<ComponenteClasses valor="Sou um componente de classe!"/>
	</div>
	, elemento);
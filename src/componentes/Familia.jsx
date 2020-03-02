import React from 'react';

export default props => 
	<div>
		{/* ESSA SOLUÇÃO FUNCIONA APENAS COM UM ELEMENTO*/}
		<h1>Familia {props.sobrenome}</h1>
		{/* Criando um clone de props com operador spread {...props}*/} 
		{React.cloneElement(props.children, {...props})} 
		{/* {React.cloneElement(props.children, props)} */}
		{/* {React.cloneElement(props.children,
			{ sobrenome: props.sobrenome })} */}
	</div>
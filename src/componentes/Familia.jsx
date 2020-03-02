import React from 'react';

export default props => 
	<div>
		<h1>Familia {props.sobrenome}</h1>
		{props.children}
	</div>
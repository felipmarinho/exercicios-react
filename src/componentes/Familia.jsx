import React from 'react';
import { filhosComProps } from '../utils/utils'

export default props => 
	<div>
		<h1>Familia</h1>
		{filhosComProps(props)}
		
		{/* Caso não quera isolar essa interação utilize um utils  */}
		{/* <h2>{props.sobrenome}</h2>
		{React.Children.map(props.children, filho => {
			return React.cloneElement(filho, {...props})
		})}  */}
	</div>
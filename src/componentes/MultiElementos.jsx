import React from 'react';

export default props => [
	<h1>Parte 1</h1>,
	<h2>Parte 2</h2>
]

// export default props =>
// 	<React.Fragment> {/* igual a usar <></> */}
// 		<h1>Parte 1</h1>
// 		<h2>Parte 2</h2>
// 	</React.Fragment>

// Adiciona mais uma div ao codigo...
// export default props =>
// 	<div>
// 		<h1>Parte 1</h1>
// 		<h2>Parte 2</h2>
// 	</div>

// Line 5:2:  Parsing error: Adjacent JSX elements must be wrapped in an
// enclosing tag. Did you want a JSX fragment <>...</>?
// export default props =>
// 	<h1>Parte 1</h1>
// 	<h2>Parte 2</h2>
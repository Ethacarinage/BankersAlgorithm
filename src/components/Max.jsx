import React, { Component } from 'react';

class Max extends Component{
	render(){
		var numero = document.getElementById("Number_Resources");
		var valor = Number(numero.options[numero.selectedIndex].value);
		return (
			<div id="inputResources">
			</div>
			)
	}
}

export default Max;
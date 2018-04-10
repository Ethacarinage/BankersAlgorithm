
function setResources() {
	var numero = document.getElementById("Number_Resources");
	var divProcess = document.getElementById("inputResources");
	var valor = Number(numero.options[numero.selectedIndex].value);
	init_label = document.createElement("label");
	init_label.innerHTML = "Enter the number max for each resource: ";
	divProcess.appendChild(init_label);
	for(var j = 0; j < valor; j++){
		current_label = document.createElement("label");
		current_label.setAttribute("id", "Lresource"+(j+1))
		current_label.innerHTML = "Resource N°"+(j+1);
		current_input = document.createElement("input");
		current_input.setAttribute("id", "resource"+(j+1));
		divProcess.appendChild(current_label);
		divProcess.appendChild(current_input);
	}
}

function setM() {
  var allocated = document.getElementById("AllocatedM");
  var needed = document.getElementById("Needed");
  label1 = document.createElement("label");
  label2 = document.createElement("label2");

  var numeroP = document.getElementById("Number_process");
	var valorP = Number(numeroP.options[numeroP.selectedIndex].value);
  var numeroR = document.getElementById("Number_Resources");
	var valorR = Number(numeroR.options[numeroR.selectedIndex].value);

  label1.innerHTML = "Enter the number of resource that are in use: ";
  label2.innerHTML = "Enter the number of resource that are needed: ";
  allocated.appendChild(label1);
  needed.appendChild(label2);

  allocatedM   = document.createElement("table");
  allocatedM.setAttribute("id", "allocatedMatrix");
  allocatedMHead = document.createElement("thead");
  allocatedMBody = document.createElement("tbody");

  for (var i = 0; i <= valorP; i++){
  	current_row = document.createElement("tr");
  	current_row.setAttribute("id", "trAM"+i);
  	for(var j = 0; j <= valorR; j++){
  		if(i == 0){
  			current_cell = document.createElement("td");
  			current_cell.setAttribute("align","center");
  			if(j > 0){
  				currenttext = document.createTextNode("Resource"+j);
  				current_cell.appendChild(currenttext);
  			}
  			current_cell.setAttribute("align","center");
  			current_row.appendChild(current_cell);
  		}else{
  			current_cell = document.createElement("td");
  			if(j > 0){
  				currentinput = document.createElement("input");
  				currentinput.setAttribute("id", "allocatedM"+j+i);
  				current_cell.appendChild(currentinput);
  			}else{
					currentinput = document.createTextNode("Process"+i);
					current_cell.appendChild(currentinput);
  			}
  			current_cell.setAttribute("align","center");
  			current_row.appendChild(current_cell);
  		}
  	}
  	if(i == 0){
  		allocatedMHead.appendChild(current_row);
  	}else{
  		allocatedMBody.appendChild(current_row);
  	}
  }

  allocatedM.appendChild(allocatedMHead);
  allocatedM.appendChild(allocatedMBody);
  allocated.appendChild(allocatedM);

 
  neededM   = document.createElement("table");
  neededM.setAttribute("id", "neededMatrix");
  neededMHead = document.createElement("thead");
  neededMBody = document.createElement("tbody");

  for (var i = 0; i <= valorP; i++){
  	current_row = document.createElement("tr");
  	current_row.setAttribute("id", "trNM"+i);
  	for(var j = 0; j <= valorR; j++){
  		if(i == 0){
  			current_cell = document.createElement("td");
  			current_cell.setAttribute("align","center");
  			if(j > 0){
  				currenttext = document.createTextNode("Resource"+j);
  				current_cell.appendChild(currenttext);
  			}
  			current_cell.setAttribute("align","center");
  			current_row.appendChild(current_cell);
  		}else{
  			current_cell = document.createElement("td");
  			if(j > 0){
  				currentinput = document.createElement("input");
  				currentinput.setAttribute("id", "neededM"+j+i);
  				current_cell.appendChild(currentinput);
  			}else{
					currentinput = document.createTextNode("Process"+i);
					current_cell.appendChild(currentinput);
  			}
  			current_cell.setAttribute("align","center");
  			current_row.appendChild(current_cell);
  		}
  	}
  	if(i == 0){
  		neededMHead.appendChild(current_row);
  	}else{
  		neededMBody.appendChild(current_row);
  	}
  }

  neededM.appendChild(neededMHead);
  neededM.appendChild(neededMBody);
  needed.appendChild(neededM);

}

function Start(argument) {
	StartMax();
	StartAllocatedM();
	StartNeededM();
	setMaxV();
	setAllocated();
	setAvaible();
}

function StartMax() {
	var numero = document.getElementById("Number_Resources");
	var divProcess = document.getElementById("inputResources");
	var valor = Number(numero.options[numero.selectedIndex].value);
	var Eaux;
	var Aux;
	for(var j = 0; j < valor; j++){
		Laux = document.getElementById("Lresource"+(j+1));
		Eaux = document.getElementById("resource"+(j+1));
		Aux = Eaux.value;
		Eaux.parentNode.removeChild(Eaux);
		Laux.parentNode.removeChild(Laux);


		current_label = document.createElement("label");
		current_label.setAttribute("id", "Lresource"+(j+1))
		current_label.innerHTML = "Resource N°"+(j+1)+": ";

		current_label2 = document.createElement("label");
		current_label2.setAttribute("id", "resource"+(j+1));
		current_label2.setAttribute("class", "px-1 btn btn-light")
		current_label2.innerHTML = Aux;

		divProcess.appendChild(current_label);
		divProcess.appendChild(current_label2);
	}
}


function StartAllocatedM(){
	var numeroP = document.getElementById("Number_process");
	var valorP = Number(numeroP.options[numeroP.selectedIndex].value);
  var numeroR = document.getElementById("Number_Resources");
	var valorR = Number(numeroR.options[numeroR.selectedIndex].value);

	for (var i = 1; i <= valorP; i++){
  	for(var j = 1; j <= valorR; j++){
  		inputValue = document.getElementById("allocatedM"+j+i);
  		Aux = inputValue.value;
  		inputValue.parentNode.setAttribute("id", "allocatedM"+j+i);
  		inputValue.parentNode.innerHTML = Aux;
  	}
  }
}

function StartNeededM(){
	var numeroP = document.getElementById("Number_process");
	var valorP = Number(numeroP.options[numeroP.selectedIndex].value);
  var numeroR = document.getElementById("Number_Resources");
	var valorR = Number(numeroR.options[numeroR.selectedIndex].value);

	for (var i = 1; i <= valorP; i++){
  	for(var j = 1; j <= valorR; j++){
  		inputValue = document.getElementById("neededM"+j+i);
  		Aux = inputValue.value;
  		inputValue.parentNode.setAttribute("id", "neededM"+j+i);
  		inputValue.parentNode.innerHTML = Aux;

  	}
  }
}

function setMaxV() {
	var Max = document.getElementById("MaxV");
  var numeroR = document.getElementById("Number_Resources");
	var valorR = Number(numeroR.options[numeroR.selectedIndex].value);
	MaxV   = document.createElement("table");
  MaxV.setAttribute("id", "MaxVector");
  MaxVBody = document.createElement("tbody");
  
	current_row = document.createElement("tr");
	current_row.setAttribute("id", "trAV");
	for(var j = 1; j <= valorR; j++){
		Aux = document.getElementById("resource"+j);
		current_cell = document.createElement("td");
		current_cell.setAttribute("align","center");
		current_cell.setAttribute("id", "MV"+j);
		currenttext = document.createTextNode(Aux.innerText);
		current_cell.appendChild(currenttext);
		current_row.appendChild(current_cell);
	}
	MaxVBody.appendChild(current_row);
	MaxV.appendChild(MaxVBody);
	Max.appendChild(MaxV);
}

function setAllocated() {
	var allocated = document.getElementById("Allocated");
  var numeroR = document.getElementById("Number_Resources");
	var valorR = Number(numeroR.options[numeroR.selectedIndex].value);
	var numeroP = document.getElementById("Number_process");
	var valorP = Number(numeroP.options[numeroP.selectedIndex].value);

	allocatedV   = document.createElement("table");
  allocatedV.setAttribute("id", "allocatedVector");
  allocatedVBody = document.createElement("tbody");
	current_row = document.createElement("tr");
	current_row.setAttribute("id", "trAV");
	for(var j = 1; j <= valorR; j++){
		var suma = 0;
		for(var i= 1; i <= valorP; i++){
			inputValue = document.getElementById("allocatedM"+j+i);
			Aux = inputValue.innerText;
			suma = suma + Number(Aux);
		}
		current_cell = document.createElement("td");
		current_cell.setAttribute("align","center");
		current_cell.setAttribute("id", "ALV"+j);
		currenttext = document.createTextNode(suma);
		current_cell.appendChild(currenttext);
		current_row.appendChild(current_cell);
	}
	allocatedVBody.appendChild(current_row);
	allocatedV.appendChild(allocatedVBody);
	allocated.appendChild(allocatedV);
  
}

function setAvaible() {
	var avaible = document.getElementById("Avaible");
  var numeroR = document.getElementById("Number_Resources");
	var numeroP = document.getElementById("Number_process");
	var valorP = Number(numeroP.options[numeroP.selectedIndex].value);
	var valorR = Number(numeroR.options[numeroR.selectedIndex].value);
	avaibleV   = document.createElement("table");
  avaibleV.setAttribute("id", "avaibleVector");
  avaibleVBody = document.createElement("tbody");
  
	current_row = document.createElement("tr");
	current_row.setAttribute("id", "trAV");
	for(var j = 1; j <= valorR; j++){
		var suma = 0;
		Max = document.getElementById("MV"+j);
		Aux = Max.innerText;
		Allo = document.getElementById("ALV"+j);
		Aux2 = Allo.innerText;
		suma = Number(Aux) - Number(Aux2);
		current_cell = document.createElement("td");
		current_cell.setAttribute("align","center");
		current_cell.setAttribute("id", "AV"+j);
		currenttext = document.createTextNode(suma);
		current_cell.appendChild(currenttext);
		current_row.appendChild(current_cell);
	}
	avaibleVBody.appendChild(current_row);
	avaibleV.appendChild(avaibleVBody);
	avaible.appendChild(avaibleV);
}
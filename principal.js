console.log("FUI CARREGADO DO HTML PARA O JAVASCRIPT");
var baby = document.querySelector(".titulox");
alert("TESTE Hello World");
console.log(baby);
console.log(baby.textContent);
baby.textContent = "LA NUTRIÇÃO APARECIDA";

//-------------------------------
console.log("mostrar paciente");
var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);


console.log("mostrar classe peso");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

console.log("mostrar classe altura");
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
console.log(tdImc);

//-----
var pesoEValido = true;
var alturaEValida = true;

if(peso <= 0 || peso >= 800){
	console.log("Peso Inválido.");
	pesoEValido = false;
	tdImc.textContent = "Peso inválido!";

}

if(altura <= 0 || altura >= 3.00){
	console.log("Altura Inválida.")
		alturaEValida = false;
		tdImc.textContent= "Altura inválida!";

	}

if(alturaEValida && pesoEValido){
	var imc = peso / (altura * altura);  //100 / 2.0 * 2.0
	tdImc.textContent = imc;
	

}








//------
var imcDaLinha = tdImc.textContent;
console.log("AAAAAAAAAAAA");
//alert(imcDaLinha);



console.log(paciente);  //tr7
console.log(tdPeso);  //td que tem o peso
console.log(tdAltura); //td que tem a altura

console.log("O valor do peso é: ");
console.log(peso); //obter o valor do peso = 100
console.log("O valor da altura é: ");
console.log(altura); //obter o valor da altura = 2.00	

console.log("O valor do IMC do Paulo é: ");
console.log(imc);


	//console.log(paciente.textContent);
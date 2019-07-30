console.log("FUI CARREGADO DO HTML PARA O JAVASCRIPT");
var baby = document.querySelector(".titulox");
alert("TESTE Hello World");
console.log(baby);
console.log(baby.textContent);
baby.textContent = "LA NUTRIÇÃO APARECIDA";

//-------------------------------


//selecionar a classe paciente no html
console.log("mostrar primeiro paciente");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i< pacientes.length; i++){
	//mostra paciente na posicao 0

	console.log(pacientes[i]);
	
	console.log("mostrar os  pacientes adiantes");
	//mostra paciente na posicao 2 em diante e entra no loop
	
	var paciente = pacientes[i];

	//varredura js para calcular imc
	console.log("mostrar classe peso");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

console.log("mostrar classe altura");
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log("mostrar classe imc");
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
	tdImc.textContent = imc.toFixed(2);
	

}//final do if



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

var tdNome = paciente.querySelector(".info-nome");

console.log("O valor do IMC do "+tdNome.textContent+" é: " +imc.toFixed(4));
console.log(imc.toFixed(2));

//console.log(paciente.textContent);




} //final do for





function eje1(color){
	 document.bgColor = color;
}

function titulo(texto){
	    document.title = texto;
}

function dominio(){
		let dominio = document.domain;
		document.write("el dominio es "+dominio)
}

function url(){
		let url = document.URL;
		document.write("la ubicacion del documento es "+url)
}
function array(){
		let alumnos = ["Alfonso","Alberto","Carlos","José María"];
		let letra =alumnos[1].charAt(2);
		document.write(letra);
}
function array2(){
		let variado = [831,"Alberto"];
		document.write(typeof(variado[0]));
		document.write(typeof(variado[1]));
}
function concatena(){
		let alumnos = ["Alfonso","Alberto","Carlos"];
		let texto = alumnos[0]+alumnos[1]+alumnos[2];
		document.write(texto);
}
function concatena2(){
		let partes = ["posiciones", "se cuentan", "Las", "array", "cero.", "a partir", "del"];
		let texto = partes[2]+" "+partes[0]+" "+partes[6]+" "+partes[3]+" "+partes[1]+" "+partes[5]+" "+partes[6]+" "+partes[4];
		document.write(texto);
}
function error(){
	let texto = "eughg";
	let pasar = Number(texto);
	//sale number y NaN que no puede convertirlo
	document.write(typeof(pasar)+""+pasar);
}
function eje2(){
	let num1 = 888;
	let num2 = 777;
	let num3 = 666;
	let num1c = num1.toString();
	let num2c = num2.toString();
	let num3c = num3.toString();
	let concate=num1c+" "+num2c+" "+num3c;
	document.write(concate);
	let suma= num1+num2+num3;
	document.write(suma);
	document.write(typeof(concate)+" "+typeof(suma));
}

function incremento(){
	    let numero = 12;
	    numero+=5;
	   numero-=1;
	   document.write(numero);
	   
	   let resto = 57409%16789;
	   document.write(" "+resto);
	   
	   let multiplicacion=10**5;
	   document.write(" "+multiplicacion);
	   
}

function compara(){
	    let numero = 12;
	    let numerostring="12";
	    
	    let resultado = numero===numerostring;
	    
	    let resultado2 = numero==numerostring;
	    document.write(resultado);
	    document.write(resultado2);
	   
}

function vehiculo(anyo,marca,motor){
	   this.anyo=anyo;
	   this.marca=marca;
	   this.motor=motor;
}

function objeto(){
	    var Vehiculo = new vehiculo('Honda','Civic', 2010);
   		var Vehiculo1 = new vehiculo('Honda','Civic', 2010);
   		document.write(Vehiculo==Vehiculo1);
   		document.write(Vehiculo===Vehiculo1);
}
function texto(){
 let person = prompt("Indica tu nombre");
 presenta(person);
 }
 function presenta(imprimir){
 document.write(imprimir);
 }
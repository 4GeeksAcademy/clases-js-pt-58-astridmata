import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  //write your code here
  console.log("Hola esta es la clase de js ");




  //estructura condicial if....else


  // let edad = 118

  // if (edad === 18) { //true

  //   console.log("Eres  Mayor de edad");

  //   //bloque de codigo si es verdadero 
  // } else {
  //   //false 
  //   //bloque de codigo si es falso
  //   console.log("No eres Mayor de Edad")
  // }


  //ejemplo 2:
  // let calificacion = 50


  // if (calificacion >= 90) {
  //   console.log("Excelente");

  // } else if (calificacion >= 75) {
  // console.log("Bueno");

  // }else{
  //   console.log("insuficiente");

  // }

  // Array 

  // let alumno1 = Carlos
  // let alumno2 = Lucas
  // let alumno3 = Manuel 


  //      index     0         1        2          
  // let alumnos = ["Carlos", "Lucas", "Manuel"]  // length = 3 

  // console.log(alumnos.length);


  // length = longitud  = tamaño
  // index = posicion de  cada elemento = indice

  //metodos de array

  // push() agrega al final de la lista 
  // alumnos.push("Julian")
  // console.log(alumnos);

  // alumnos.push("David")
  // console.log(alumnos);

  //pop() elimina al final de la lista
  // alumnos.pop()
  // console.log(alumnos);

  //shift() elimina el primer elemento
  // alumnos.shift()
  // console.log(alumnos);


  // console.log(alumnos[0]);
  // console.log(alumnos[1]);
  // console.log(alumnos[2]);

  // Bucle for:

  // for (inicializacion; condicion; incremento) {
  //   //codigo que se ejecuta en cada iteracion
  // }

  // 4
  // let frutas = ["manzana", "naranja", "uva", "limon"]  //frutas.length = 4

  // for (let index = 0; index < frutas.length; index++) {

  //   if (frutas[index] === "limon") {
  //     console.log(frutas[index] + "es")

  //   } else {
  //     console.log(frutas[index] + "s");

  //   }

  //   // console.log(frutas[index]+"s")
  // }
  //manzanas
  //naranjas
  //uvas
  //limons




  // for ...of

  // for (const elemento of array){
  //   //codigo que isa el elemento 
  // }

  // for (const fruta of frutas ){
  //   console.log(fruta);

  // }


  //includes() busca y me avisa si existe un elemento 
  // console.log(frutas.includes("uva"));
  // console.log(frutas.includes("fresa"));

  //unshift() 

  // console.log(frutas.unshift("banana"));
  // console.log(frutas);

  // repaso de bucles


  // ejemplo 1 contar del 1 al 5 

  // for (let index = 1; index <= 5; index++) {
  //   console.log("El numero es: " + index);

  // }
  // El numero es: 1
  // El numero es: 2
  // El numero es: 3

  //ejemplo 2: rerrer una lista de frutas
  // let frutas = ["manzana", "banana", "uva"]

  // for (let index = 0; index < frutas.length; index++) {
  //   console.log("Tenemos la fruta: " + frutas[index]);


  // }

  //tenemos la fruta : manzana


  //for anidado:

  // ejemplo 3: Crear un calendario 

  // let diasDeLaSemana = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]
  // let semanasDelMes = 4

  // //el bucle exterior representa las semanas del mes 
  // for (let index = 1; index <= semanasDelMes; index++) {
  //   let linea = `Semana ${index}: `;
  //   //el bucle interior itera a traves de los dias de la semana 
  //   for (let dia = 0; dia < diasDeLaSemana.length; dia++) {
  //     linea += diasDeLaSemana[dia] + " ";

  //   }
  //   console.log(linea);


  // }
  //Semana 1: Lun Mar Mie Jue Vie Sab Dom  
  //Semana 2: Lun Mar Mie Jue Vie Sab Dom  
  //Semana 3: Lun Mar Mie Jue Vie Sab Dom  
  //Semana 4: Lun Mar Mie Jue Vie Sab Dom  


  // ejemplo 4: creacion de frases promocionales 

  // let adjetivos = ["Increible", "Fantastico", "Unico"]
  // let productos = ["Telefono", "Reloj", "Auriculares", "Televisor"]
  // let ofertas = ["En descuento", "Sin descuento"]

  // for (let i = 0; i < adjetivos.length; i++) {

  //   for (let j = 0; j < productos.length; j++) {
  //     console.log(adjetivos[i] + " " + productos[j] + " Compra ya!! ");


  //   }

  // }

  ///////////////////////////////////////////////////////////
  // bucle while

  // while (condicion){
  //   //codigo a ejecutar
  // }

  // let contador = 0
  // while (contador < 5) {
  //   console.log(contador);
  //   contador ++ // aumenta el contador en 1 para que la condicion se vuelva falsa eventualmente 
  // }
  ///ejemplo 
  // let numero = 5
  // while (numero > 0) {
  //   console.log("Quedan " + numero + " segundos...");
  //   numero-- // numero = numero -1
  // }
  // console.log("Despegue!!");





  ///funciones//////////////
  // funcion de declaracion 
  // function listaDeFrutas() {
  //   let frutas = ["manzana", "naranja", "uva", "limon"]
  // }
  // listaDeFrutas()


  // function saludar() {
  //   console.log("Hola Mundo");
  // }
  // saludar()

  // //ejemplo llamada de funcion antes de la declaracion 
  // suma()

  // function suma() {
  //   let resultado = 4 + 5
  //   console.log(resultado);


  // }

  // //ejemplo con parametros
  // function multiplicar(x,y) {
  //   return x * y

  // }
  // let producto = multiplicar(5,10)
  // console.log(producto);

  // let producto1 = multiplicar(3,8)
  // console.log(producto1);

  // //ejemplo:
  // function saludo(nombre) {
  //   console.log( "hola, " + nombre + "!");

  // }
  // saludo ("Julio") 
  // saludo ("Maria") 
  // saludo ("Jose") 


  // /////////////////////////////funciones de expresion - funcion anonima

  // let restar = function(a, b) {
  //   return a - b
  // }
  // let diferencia = restar(10, 3)
  // console.log(diferencia);

  // //ejemplo:

  // let saludar2 = function() {
  //   console.log("hola desde una funcion de expresion");

  // }
  // saludar2()

  // //////////////// funcion flecha 
  // // ejemplo:
  // const duplicar = numero => numero * 2
  // let resultadoDeDuplicar = duplicar(8)
  // console.log(resultadoDeDuplicar);

  // // ejemplo :
  // const calcularIva = (precio) => {
  //    const iva = 0.16
  //    return precio * (1 + iva)
  // }
  // let precioTotal= calcularIva(200)
  // console.log(precioTotal);



  // //Math.floor(Math.random())
  //              // 0   1     2    3    4
  // let vocales = ["a", "e", "i", "o", "u"]
  // //generar un indice aleatorio
  // let aleatorio = Math.floor(Math.random() * vocales.length)

  // console.log(vocales[aleatorio]);

};

//tipos de dato en js: string, numericos, booleanos, null , arrays, funciones, 


//objetos literales

// {propiedad: "valor" }

//declaracion del objeto:
// let persona = {
//   nombre: "Ana",
//   edad: 30,
//   esEstudiante: true,
//   cursos: ["HTML", "CSS", "JS"],
//   //las funciones cuando se encuentran dentro de un objeto se llaman metodos 
//   hablar: function () {
//     return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y estoy estudiando ${this.cursos.length} cursos`
//   },
//   direccion: {
//     calle: "Libertador",
//     ciudad: "Caracas"
//   },
//   "fecha de nacimiento": "20-08-1995"
// }

// // consultar:
// //notacion de punto .
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.hablar());
// console.log(persona.direccion.ciudad);
// // console.log(persona.fecha de nacimiento ); no es correcto 


// //notacion de corchetes []
// console.log(persona.cursos[1]);
// console.log(persona["fecha de nacimiento"]);
// //ultimo curso de ana
// console.log(persona.cursos[persona.cursos.length - 1]);



// 
//templates literals

// ` ${expresion}`
// let nombre = "Maria"
// let edad = 28

// let saludo = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`
// console.log(saludo);



//operadores ternarios

// la sintaxis es : condicion ? expresion_si_es_verdadero : expresion_si_es_falso


// let edades = 10
// let puedeVotar = edades >=18 ? "si puede votar" : "no puede votar"
// console.log(puedeVotar);

///agrego mas condicion:

// condicion1 ? valor_si_es_verdadera1 : (condicion2 ? valor_si_es_verdadera2 : valor_si_es_falsa2)


// let edades = 82

// let puedeVotar = (edades >= 80)
//               ? "muy mayor para votar" 
//               : (edades >= 18) 
//               ? "puede votar" 
//               : "no puede votar";
// console.log(puedeVotar);




// //ejemplo 2
// let a = 10
// let b = 5
// let resultado = a > b ? a * 2 : b / 2
// console.log(resultado);

//manipulacion del DOM 
//encontrar el elemento
//manipular el elemento (html y css)

function cambiarEstilo() {
  let h2 = document.getElementById("titulo-principal")
  
  
  if (h2.style.backgroundColor === "") {
    h2.style.backgroundColor = "red"
    h2.style.fontSize = "60px"
  } else {
    h2.style.backgroundColor = ""
    h2.style.fontSize = "30px"
  }

}
document.getElementById("miBoton").addEventListener("click", cambiarEstilo)

//elemento.addEventListener(tipoDeEvento, funcionManeja, [opciones])
// tipo de evento: click, mouseover, submit, input 

//ejemplo del mouseover y mouseout (al pasar el raton y al salir de raton)

//funcion para resaltar:
function resaltar() {
  let div = document.getElementById("caja-hover")
  div.style.border = "4px solid orange"
  div.style.cursor = "pointer"
}

//funcion para normalizar:
function normalizar() {
  let div = document.getElementById("caja-hover")
  div.style.border = "1px solid black"
  div.style.cursor = "default"
}
//seleccionamos el elemento y el escuchador al mouseover
document.getElementById("caja-hover").addEventListener("mouseover", resaltar)
//seleccionamos el elemento y el escuchador al mouseout
document.getElementById("caja-hover").addEventListener("mouseout", normalizar)


/// ejemplo de tipo input se dispara cuando el usuario agrega una letra, una modificacion
//la funcion se ejecuta en tiempo real cada vez que el input cambia
function contarCaracteres() {
  let input = document.getElementById("campo-texto")
  let contador = document.getElementById("contador-caracteres")

  contador.textContent = input.value.length + " caracteres."

}

document.getElementById("campo-texto").addEventListener("input", contarCaracteres)